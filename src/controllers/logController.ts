import { Request, Response } from 'express'
import { filterLogsByField } from '../utils/filterLogs'
import { LogEntryKey } from '../interfaces/logEntry'
import * as logService from '../services/logService';

export function getLogsByField(req: Request, res: Response): void {
  const fieldName = req.params.fieldName as LogEntryKey

  try {
    if (!fieldName) {
      throw new Error('El campo fieldName es obligatorio.')
    }

    const filteredLogs = filterLogsByField(fieldName)

    // Devuelve un objeto JSON con la clave y el valor correspondiente
    const responseObject = {
      fieldName: fieldName,
      filteredLogs: filteredLogs,
    }

    res.status(200).json(responseObject)
  } catch (error) {
    console.error(error)

    // Devuelve respuestas HTTP apropiadas según el tipo de error
    if (error instanceof Error) {
      res.status(400).json({ error: error.message })
    } else {
      res.status(500).json({ error: 'Error interno del servidor.' })
    }
  }
}

export async function getLogsByDateRange(req: Request, res: Response): Promise<void> {
  try {
    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
      res.status(400).json({ error: 'Los parámetros startDate y endDate son obligatorios.' });
      return;
    }

    console.log(startDate)
    console.log(endDate)
    const logs = await logService.getLogsByDateRange(new Date(startDate as string), new Date(endDate as string));

    res.json(logs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los logs por rango de fecha.' });
  }
}