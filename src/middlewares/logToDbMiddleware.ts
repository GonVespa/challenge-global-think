import { NextFunction, Request, Response } from 'express'
import LogModel from '../models/logModel'

export async function logToDbMiddleware(req: Request, _res: Response, next: NextFunction): Promise<void> {
  try {
    // Log después de una solicitud exitosa
    const logEntry = {
      timestamp: new Date(),
      method: req.method,
      path: req.path,
    }

    // Guarda el log en la base de datos
    await LogModel.create(logEntry)
    
    // Ejecuta el siguiente middleware
    next()
  } catch (error) {
    console.error('Error en el middleware de registro:', error)
  }
}