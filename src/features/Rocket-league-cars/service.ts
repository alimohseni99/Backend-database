import { addCar } from "./add";
import { CarDb } from "./types";

export function createCarService(db: CarDb) {
  return {
    addCar: addCar(db),
  };
}
