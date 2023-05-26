import mongoose from "mongoose";
import { config } from "./config";
import { log } from "./logger";

export async function connectDatabase() {
    const uri = config.DB_URL
    try {
        const con = await mongoose.createConnection(uri)
        log.info('DATABSE CONNECTED')
    } catch (error) {
        log.error(error)
    }
}