import { SortOrder } from "mongoose";
import { Product } from "../models/productModel";
import { Request } from "express";
import { filterParams } from "../helpers/filter";

export const getAllProducts = async (req: Request) => {
  const { sort, page = "1", limit = "6" } = req.query;

  const filters = filterParams(req);

  const pageNumber = Number(page);
  const limitNumber = Number(limit);

  const skip = (pageNumber - 1) * limitNumber;

  let query = Product.find(filters);

  const sortField = sort as string;

  if (sortField) {
    const sortObj: Record<string, SortOrder> = {
      [sortField]: 1,
    };

    query = query.sort(sortObj);
  }

  query = query.skip(skip);
  query = query.limit(Number(limit));

  const products = await query;
  return products;
};
