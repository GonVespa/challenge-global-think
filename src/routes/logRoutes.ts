import express from 'express'
import { getLogsByField } from '../controllers/logController'
import { getLogsByDateRange } from '../controllers/logController';

const router = express.Router()
/**
 * @swagger
 * tags:
 *   name: Logs
 *   description: Endpoints relacionados con logs
 */

/**
 * @swagger
 * /logs/{fieldName}:
 *   get:
 *     summary: Obtiene logs filtrados por un campo específico.
 *     tags: [Logs]
 *     parameters:
 *       - in: path
 *         name: fieldName
 *         required: true
 *         schema:
 *           type: string
 *         description: Nombre del campo por el cual filtrar los logs.
 *     responses:
 *       200:
 *         description: Logs obtenidos correctamente.
 *       404:
 *         description: No se encontraron logs para el campo especificado.
 */
router.get('/:fieldName', getLogsByField)

/**
 * @swagger
 * /logs/ByDateRange:
 *   get:
 *     summary: Obtiene logs dentro de un rango de fechas.
 *     tags: [Logs]
 *     parameters:
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date
 *         description: Fecha de inicio del rango (en formato YYYY-MM-DD).
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date
 *         description: Fecha de fin del rango (en formato YYYY-MM-DD).
 *     responses:
 *       200:
 *         description: Logs obtenidos correctamente en el rango de fechas especificado.
 *       400:
 *         description: Parámetros de fecha incorrectos o faltantes.
 *       404:
 *         description: No se encontraron logs dentro del rango de fechas especificado.
 */

router.get('/ByDateRange', getLogsByDateRange);

export default router