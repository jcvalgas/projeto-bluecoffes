import { findAllCoffeesService, findByIdCoffeeService } from '../services/coffee.service.js'

export const findAllCoffeesController = (req, res) => {
    const coffees = findAllCoffeesService();
    res.send(coffees)
};

export const findByIdCoffeeController = (req, res) => {
    const paramId = +req.params.id;
    const choosenCoffee = findByIdCoffeeService(paramId)
    res.send(choosenCoffee)
}
