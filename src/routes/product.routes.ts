import { Router } from "express"

const productRoutes = Router();

productRoutes.post('/', async (_, res) => {
    res.status(201).json({ message: 'Product created successfully' });
});

export default productRoutes;