export const productsSwagger = {
  "/products": {
    get: {
      summary: "Get products list",
      tags: ["Products"],
      parameters: [
        {
          in: "query",
          name: "search",
          schema: { type: "string" },
          description: "Search products by name and code",
        },
        {
          in: "query",
          name: "page",
          schema: { type: "integer", default: 1 },
        },
        {
          in: "query",
          name: "limit",
          schema: { type: "integer", default: 6 },
        },
        {
          in: "query",
          name: "energyClass",
          schema: { type: "string", enum: ["A", "B", "C"] },
        },
        {
          in: "query",
          name: "capacity",
          schema: { type: "number", enum: [8, 9, 10.5] },
        },
        {
          in: "query",
          name: "sort",
          schema: { type: "string", enum: ["price", "capacity"] },
        },
      ],
      responses: {
        200: { description: "Success" },
        422: { description: "Validation error" },
      },
    },
  },
};
