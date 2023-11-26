import LogModel from '../models/logModel'

export async function getLogsByDateRange(startDate: Date, endDate: Date) {
  try {
    const logs = await LogModel.find({
      timestamp: {
        $gte: startDate,
        $lte: endDate,
      },
    })

    return logs
  } catch (error) {
    console.error('Error al obtener logs por rango de fecha:', error)
    throw error
  }
}