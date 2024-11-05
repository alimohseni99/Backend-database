import { Router } from "express";
import { createCarService } from "./service";
import { CarDb } from "./types";

export function createRoutes(db: CarDb) {
  const router = Router();
  const service = createCarService(db);

  router.post("/", async (req, res) => {
    const { color, model, year } = req.body;
    const car = await service.addCar({ color, model, model_year: year });
    res.status(201).json(car);
  });

  return router;
}
