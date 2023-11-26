import { Schema, model, Document } from 'mongoose'
import LogEntry from '../interfaces/logEntry'

interface Log extends Document, LogEntry {
    
  }
const logSchema = new Schema({
    timestamp: { type: Date, index: true },
    method: String,
    path: String,
  })
  
  const LogModel = model<Log>('Log', logSchema)
  
  export default LogModel