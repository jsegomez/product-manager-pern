import { Router } from "express"

import { body } from "express-validator";
import { createProduct } from "../handlers/product";
import { handleValidationErrors } from "../middlewares/validation.middleware";

const productRoutes = Router();

productRoutes.post('/',
    [
        body('name').isString().withMessage('Name must be a string'),
        body('description').isString().withMessage('Description must be a string'),
        body('price').isDecimal().withMessage('Price must be a decimal number'),
    ],
    handleValidationErrors, createProduct
);

export default productRoutes;