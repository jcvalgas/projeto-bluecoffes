import coffeesService from '../services/coffee.service.js'

export const findAllCoffeesController = (req, res) => {
    const coffees = coffeesService.findAllCoffeesService
    res.send(coffees)
};

export const findByIdCoffeeController = (req, res) => {
    const paramId = req.params.id;
    const choosenCoffee = coffeesService.findByIdCoffeeService(paramId)
    res.send(choosenCoffee)
}
