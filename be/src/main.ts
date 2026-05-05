import express, { Request, Response } from "express";
import cors from "cors";
import productRouter from "./routes/product";
import { connectDB } from "./config/db";
import { errorMiddleware } from "./middleware/errorHandlerMiddleware";
import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "./swagger/swagger";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/products", productRouter);

app.use("/healthcheck", (req: Request, res: Response) => {
  res.status(200).json({ status: "ok" });
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(errorMiddleware);
const start = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

start();
