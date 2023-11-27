import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Nombre de tu API',
      version: '1.0.0',
      description: 'Descripción de tu API',
    },
  },
  // Rutas de tus archivos de rutas que contienen la información de Swagger
  apis: ['./src/routes/*.ts'],
}

const swaggerSpec = swaggerJSDoc(options)

export function setupSwagger(app: any) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}
