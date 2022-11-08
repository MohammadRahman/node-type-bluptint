import express from 'express';
import compression from 'compression'
import { routes } from '../routes/routes';

export function createServer() {
    const app = express()
    app.use(express.json())
    app.use(compression())



    routes(app)
    return app;
}