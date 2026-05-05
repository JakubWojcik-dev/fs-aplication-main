import { Request } from "express";
export const filterParams = (req: Request) => {
  const { search, energyClass, capacity, feature } = req.query;

  let filters: any = {};

  if (search) {
    filters.$or = [
      { name: { $regex: search, $options: "i" } },
      { code: { $regex: search, $options: "i" } },
    ];
  }
  if (energyClass) {
    filters.energyClass = energyClass;
  }
  if (capacity) {
    filters.capacity = Number(capacity);
  }
  if (feature) {
    filters.features = feature;
  }
  return filters;
};
