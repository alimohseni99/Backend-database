export type Car = {
  color: string;
  model: string;
  model_year: number;
};

export type CarDb = {
  cars: {
    create: (car: Car) => Promise<Car>;
    getAll: () => Promise<Car[]>;
    getById: (id: string) => Promise<Car>;
    update: (id: string, car: Partial<Car>) => Promise<Car>;
    delete: (id: string) => Promise<void>;
  };
};
