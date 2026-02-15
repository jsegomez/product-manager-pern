import 'dotenv/config';
import database from "./config/database";
import express from "express";

import productRoutes from "./routes/product.routes";
import { errorHandler } from './middlewares/error-handler';

// database connection
export async function connectDatabase() {
    try {
        await database.authenticate();
        await database.sync();
        console.log('Database connected and synced');
    } catch (err) {
        console.log('Error connecting or syncing database:', err);
        process.exit(1);
    }
}

const app = express();

// Routes
app.use('/products', productRoutes);

// Middlewares
app.use(express.json());
app.use(errorHandler);

export default app;

