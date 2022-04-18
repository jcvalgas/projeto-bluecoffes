import express from 'express'
import { findAllCoffeesController, findByIdCoffeeController } from '../controllers/coffee.controller.js'

export const routes = express.Router()

routes.get('/find-coffees', findAllCoffeesController)
routes.get('/find-coffees/:id', findByIdCoffeeController)
route.post('/create', paletasController.createPaletaController);
route.put('/update/:id', paletasController.updatePaletaController);
route.delete('/delete/:id', paletasController.deletePaletaController);
