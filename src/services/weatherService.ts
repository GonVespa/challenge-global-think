import axios from 'axios'
import "dotenv/config"

const API_KEY = process.env.WEATHER_APY_KEY; // Reemplaza con tu API key

export async function getWeatherData(cityName: string): Promise<any> {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=sp`)
    return response.data
  } catch (error) {
    throw error
  }
}