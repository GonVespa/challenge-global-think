import fs from 'fs';
import LogEntry from '../interfaces/logEntry';
// import LogModel from '../models/logModel';

export function filterLogsByField(fieldName: keyof LogEntry): Array<Partial<LogEntry>> {
  const logFilePath = './logs/request_logs.json';

  // Lee el archivo de registro
  if (fs.existsSync(logFilePath)) {
    const logFileContent = fs.readFileSync(logFilePath, 'utf8');
    const logFile: LogEntry[] = JSON.parse(logFileContent);

    // Filtra el array de objetos por el nombre del campo
    const filteredLogs = logFile.map((entry) => {
      return {
        [fieldName]: entry[fieldName],
      };
    });

    return filteredLogs;
  } else {
    console.error('El archivo de registro no existe.');
    return [];
  }
}

// export async function getLogsByDateRange(startDate: Date, endDate: Date): Promise<LogEntry[]> {
//   try {
//     console.log(startDate.toISOString())
//     const logs = await LogModel.find({
//       timestamp: { $gte: startDate.toISOString(), $lte: endDate.toISOString() },
//     });

//     return logs.map((log) => ({
//       timestamp: log.timestamp,
//       method: log.method,
//       path: log.path,
//     }));
//   } catch (error) {
//     console.error('Error al obtener logs por rango de fechas:', error);
//     throw error;
//   }
// }