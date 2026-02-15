import { Router, Request, Response, NextFunction } from "express"

import { body, query } from "express-validator";
import { handleValidationErrors } from "../middlewares/validation.middleware";

import { createProduct, getProductById, getProducts } from "../handlers/product";

const productRoutes = Router();

productRoutes.get('/',
    [query('id').optional().isInt().withMessage('ID must be an integer')],
    handleValidationErrors,
    (req: Request, res: Response, next: NextFunction) =>{
        if (req.query.id) return getProductById(req, res, next);
        return getProducts(req, res, next);
    }
);

productRoutes.post('/',
    [
        body('name').isString().withMessage('Name must be a string'),
        body('description').isString().withMessage('Description must be a string'),
        body('price').isDecimal().withMessage('Price must be a decimal number'),
    ],
    handleValidationErrors, createProduct
);

export default productRoutes;