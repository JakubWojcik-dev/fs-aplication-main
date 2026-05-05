import { query } from "express-validator";
import { EnergyClass, Capacity, Features } from "../interfaces/product";

const energyClass: EnergyClass[] = ["A", "B", "C"];
const capacity: Capacity[] = [8, 9, 10.5];
const features: Features[] = [
  "Drzwi AddWash™",
  "Panel AI Control",
  "Silnik inwerterowy",
  "Wyświetlacz elektroniczny",
];

export const validateProductsQuery = [
  query("search").optional().isString().trim().isLength({ min: 1, max: 100 }),
  query("page").optional().isInt({ min: 1 }).toInt(),

  query("limit").optional().isInt({ min: 1, max: 100 }).toInt(),

  query("energyClass")
    .optional()
    .isIn(energyClass)
    .withMessage("Invalid energy class type"),

  query("capacity")
    .optional()
    .toFloat()
    .custom((v) => capacity.includes(v))
    .withMessage("Invalid capacity value"),

  query("feature")
    .optional()
    .isIn(features)
    .withMessage("Invalid feature type"),
];
