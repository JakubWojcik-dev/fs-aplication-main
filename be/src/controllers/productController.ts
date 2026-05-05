import { getAllProducts } from "../services/productService";
import { Response, Request, NextFunction } from "express";

const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const rows = await getAllProducts(req);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
};

export { getProducts };
