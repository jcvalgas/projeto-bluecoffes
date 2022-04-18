import {
  findAllCoffeesService,
  findByIdCoffeeService,
  createCoffeeService,
  updateCoffeeService,
  deleteCoffeeService
} from '../services/coffee.service.js';

export const findAllCoffeesController = (req, res) => {
  const coffees = findAllCoffeesService();
  res.send(coffees);
};

export const findByIdCoffeeController = (req, res) => {
  const paramId = Number(req.params.id);
  const choosenCoffee = findByIdCoffeeService(paramId);
  res.send(choosenCoffee);
};

export const createCoffeeController = (req, res) => {
  const coffee = req.body;
  const newCoffee = createCoffeeService(coffee);
  res.send(newCoffee);
};

export const updateCoffeeController = (req, res) => {
  const idParam = Number(req.params.id);
  const coffeeEdit = req.body;
  const updateCoffee = updateCoffeeService(idParam, coffeeEdit);
  res.send(updateCoffee);
};

export const deleteCoffeeController = (req, res) => {
  const idParam = Number(req.params.id);
  deleteCoffeeService(idParam);
  res.send({message: 'Café excluido com sucesso'});
};
