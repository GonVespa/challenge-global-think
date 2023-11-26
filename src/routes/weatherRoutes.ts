import express from 'express'
import { getWeather } from '../controllers/weatherController'
import { logToDbMiddleware } from '../middlewares/logToDbMiddleware'

const router = express.Router()

router.get('/:cityName', logToDbMiddleware, getWeather)

export default router