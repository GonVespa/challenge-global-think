# Mi Proyecto

Bienvenido a mi proyecto. Aquí encontrarás una API que proporciona información sobre Datos Climaticos.

## Documentación de la API

La documentación de la API se realiza utilizando Swagger. Puedes explorar la documentación de la API visitando la interfaz de Swagger.

**Swagger UI:** [Enlace a Swagger UI](http://localhost:puerto/api-docs)

## Instalación

1. Clona el repositorio.
2. Instala las dependencias con `npm install`.
3. Configura las variables de entorno en un archivo `.env`.

## Configuración

Crea un archivo `.env` en la raíz del proyecto y proporciona los siguientes valores:
BD_URI=Tu_URL_de_MongoDB
API_KEY=Tu_API_Key

## Uso

1. Inicia la aplicación con `npm start`.
2. Realiza peticiones a la API en `http://localhost:puerto/api/`.

## Rutas API

- `GET /api/weather/:cityName`: Obtiene datos del clima para una ciudad específica.
- `GET /api/log/:fieldName`: Filtra el Json request_logs.json por alguno de los nombres de los atributos y devuelve un JSON con los campos
- `GET /api/log/ByDateRange`: Obtiene logs dentro de un rango de fechas.