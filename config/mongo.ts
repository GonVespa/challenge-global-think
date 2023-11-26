import {connect} from "mongoose"

const DB_URI = process.env.BD_URI as string

export async function dbConnect():Promise<void> {
    try {
        await connect(DB_URI)
        console.log('****CONNEXION EXITOSA****')
    } catch (error) {
        console.log('****ERROR DE CONEXICÓN*****')
        throw error
    }
}