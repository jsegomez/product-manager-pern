import { NextFunction, Request, Response } from "express";
import { HttpException } from "../utils/exceptions";

export const errorHandler = (err: Error, _request: Request, res: Response, _next: NextFunction) => {
    if (err instanceof HttpException) {
        res.status(err.statusCode).json({
            message: err.message,
            route: _request.originalUrl,
            method: _request.method,
            timestamp: new Date().toLocaleString(),
        });
    } else {
        res.status(500).json({ message: 'Internal server error' });
    }
}