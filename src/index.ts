import "dotenv/config"
import express from 'express'
import weatherRoutes from './routes/weatherRoutes'
import logRoutes from './routes/logRoutes'
import { loggerMiddleware } from './middlewares/loggerMiddleware'
import { NextFunction, Request, Response } from 'express'
import { dbConnect } from '../config/mongo' 
import { setupSwagger } from '../config/swagger'

const app = express()
const PORT = process.env.PORT || 3000

setupSwagger(app)
// Middleware para registrar solicitudes
app.use(loggerMiddleware)

// Middleware para parsear el cuerpo de las solicitudes
app.use(express.json())

// Rutas
app.use('/api/weather', weatherRoutes)
app.use('/api/log', logRoutes);


const start = async () => {
   await dbConnect()
  
    app.listen(PORT, () => {
      console.log(`Servidor en ejecución en http://localhost:${PORT}`)
    })
}

start()

//middleware para capturar cualquier error no manejado. Devuelve un error generico. 
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Error interno del servidor.'})
})

export default app