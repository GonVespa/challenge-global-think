import express from 'express'
import { getWeather } from '../controllers/weatherController'
import { logToDbMiddleware } from '../middlewares/logToDbMiddleware'

const router = express.Router()
/**
 * @swagger
 * tags:
 *   name: Weather
 *   description: Endpoints relacionados Clima
 */

/**
 * @swagger
 * /api/weather/{cityName}:
 *   get:
 *     summary: Obtiene datos del clima para una ciudad específica.
 *     tags: [Weather]
 *     parameters:
 *       - in: path
 *         name: cityName
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Datos del clima obtenidos correctamente.
 *       404:
 *         description: Ciudad no encontrada.
 */
router.get('/:cityName', logToDbMiddleware, getWeather)

export default router