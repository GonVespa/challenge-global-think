interface LogEntry {
    timestamp: Date 
    method: string
    path: string
  }
  
  export type LogEntryKey = keyof LogEntry
  
  export default LogEntry