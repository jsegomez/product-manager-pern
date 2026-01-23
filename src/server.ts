import express from "express";
import 'dotenv/config';
import database from "./config/database";

// database connection
database.authenticate()
    .then(() => console.log('Database connected'))
    .catch((err) => console.log('Error connecting to database:', err));

const app = express();

app.use(express.json());

export default app;

