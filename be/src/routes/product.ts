import express from "express";

import { Response, Request } from "express";
import { getProducts } from "../controllers/productController";
import { validateProductsQuery } from "../helpers/productQueryValidation";
import { prodcuctValidationMiddleware } from "../middleware/prodcuctValidationMiddleware";
const productRouter = express.Router();

productRouter.get(
  "/",
  validateProductsQuery,
  prodcuctValidationMiddleware,
  getProducts,
);

export default productRouter;
