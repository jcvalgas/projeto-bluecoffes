import express from 'express';
import {
  findAllCoffeesController,
  findByIdCoffeeController,
  createCoffeeController,
  updateCoffeeController,
  deleteCoffeeController,
} from '../controllers/coffee.controller.js';

export const routes = express.Router();

routes.get('/find-coffees', findAllCoffeesController);
routes.get('/find-coffees/:id', findByIdCoffeeController);
routes.post('/create', createCoffeeController);
routes.put('/update/:id', updateCoffeeController);
routes.delete('/delete/:id', deleteCoffeeController);
