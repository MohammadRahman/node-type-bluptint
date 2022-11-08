import mongoose from "mongoose";
import { config } from "./config";
import { log } from "./logger";

export async function connectDatabase() {
    const uri = config.ADMIN_DATABASE_URL
    try {
        const con = await mongoose.createConnection(uri, {
            user: config.DATABASE_USER,
            pass: config.DATABASE_PASSWORD,
            dbName: config.CUSTOMER_DATABASE_URL
        })
        log.info('DATABSE CONNECTED')
    } catch (error) {
        log.error(error)
    }
}