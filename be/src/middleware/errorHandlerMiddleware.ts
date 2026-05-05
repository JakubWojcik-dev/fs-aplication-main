import { Response, Request, NextFunction } from "express";

const errorMiddleware = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let status = 500;
  let message = "Internal server error";
  let errors = undefined;

  if (err instanceof Error) {
    message = err.message;
  }
  if (typeof err === "object" && err !== null) {
    const error = err as {
      status?: number;
      error?: unknown;
      message?: string;
    };

    message =
      status === 500 ? "Internal server error" : error.message || "Error";

    errors = error.error;

    if (error.status) {
      status = error.status;
    }
  }

  res.status(status).json({
    status,
    message,
    error: errors,
  });
};

export { errorMiddleware };
