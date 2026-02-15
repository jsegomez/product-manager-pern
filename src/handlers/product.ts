import { NextFunction, Request, Response } from 'express';

import Product from '../models/Product.model';
import { NotFoundException } from '../utils/exceptions';

export const getProducts = async (_: Request, res: Response, next: NextFunction) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
}

export const getProductById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product = await Product.findOne({ where: { id: req.query.id }});
        if (!product) throw new NotFoundException(`Product with id ${req.query.id} not found`);
        res.status(200).json(product);
    }catch (error) {
        next(error);
    }
}

export const createProduct = async (req: Request, res: Response) => {
    const product = await Product.create(req.body);
    res.status(201).json(product);
}

export default { getProducts, createProduct };