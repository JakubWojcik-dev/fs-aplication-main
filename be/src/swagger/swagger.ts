import { productsSwagger } from "../docs/product.swagger";

export const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "fe-test-task-api",
    version: "1.0.0",
  },
  paths: {
    ...productsSwagger,
  },
};
