import { NextFunction, Request, Response } from 'express'
import fs from 'fs'

const logFilePath = './logs/request_logs.json'

export function loggerMiddleware(req: Request, res: Response, next: NextFunction): void {
  const now = new Date()
  console.log(`[${now.toISOString()}] ${req.method} ${req.path}`)
  const logEntry = {
    timestamp: now.toISOString(),
    method: req.method,
    path: req.path,
  };
  try {
      // Leer el archivo de registro actual o crea uno si no existe
      let logFile: any[] = [];
      if (fs.existsSync(logFilePath)) {
        const logFileContent = fs.readFileSync(logFilePath, 'utf8');
        logFile = JSON.parse(logFileContent);
      }
    
      // Agregar la entrada al archivo de registro
      logFile.push(logEntry);
    
      // Guardar el archivo de registro
      fs.writeFileSync(logFilePath, JSON.stringify(logFile, null, 2), 'utf8');
      
      next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
}