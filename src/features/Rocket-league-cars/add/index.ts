import { Car, CarDb } from "../types";

export const addCar = (db: CarDb) => async (car: Car) => {
  return db.cars.create(car);
};
