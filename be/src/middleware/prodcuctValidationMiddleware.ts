import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const prodcuctValidationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next({
      status: 422,
      message: "Validation error",
      error: errors.array(),
    });
  }

  next();
};
