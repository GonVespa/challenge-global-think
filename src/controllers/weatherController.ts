import { Request, Response } from 'express'
import { getWeatherData } from '../services/weatherService'

export async function getWeather(req: Request, res: Response): Promise<void> {
  const cityName = req.params.cityName

  try {
    if (!cityName) {
      throw new Error('El parámetro cityName es obligatorio.')
    }
    const weatherData = await getWeatherData(cityName)
    res.json(weatherData)
  } catch (error) {
    console.error(error)

    if (error instanceof Error) {
      if (error.message === 'El parámetro cityName es obligatorio.') {
        res.status(400).json({ error: error.message })
      } else {
        res.status(500).json({ error: 'Error al obtener los datos del clima.' })
      }
    } else {
      res.status(500).json({ error: 'Error interno del servidor.' })
    }
  }
}