import request from 'supertest'
import app from '../src/index' // Importa tu aplicación Express

describe('Weather API', () => {
  it('should return weather data for a valid city', async () => {
    const response = await request(app).get('/api/weather/cordoba')
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('coord')
  })

  it('should handle errors for an invalid city', async () => {
    const response = await request(app).get('/api/weather/InvalidCity')
    expect(response.status).toBe(500)
    expect(response.body).toHaveProperty('error', 'Error al obtener los datos del clima.')
  })
})
