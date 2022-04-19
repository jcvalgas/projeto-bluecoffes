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
  if (!idParam) {
    return res.status(404).send({ message: "Café não encontrado" })
  }
  const choosenCoffee = findByIdCoffeeService(paramId);
  res.send(choosenCoffee);
};

export const createCoffeeController = (req, res) => {
  const coffee = req.body;
  if (
    !coffee ||
    !coffee.sabor ||
    !coffee.descricao ||
    !coffee.foto ||
    !coffee.preco
  ) {
    return res.status(400).send(
      {message: 'Você não preencheu todos os dados para adicionar um novo café ao cardápio!'},
    );
  }
  const newCoffee = createCoffeeService(coffee);
  res.send(newCoffee);
};

export const updateCoffeeController = (req, res) => {
  const idParam = Number(req.params.id);
  const coffeeEdit = req.body;
  if (!idParam) {
    return res.status(404).send({ message: "Café não encontrado" })
  }

  if (!paletaEdit || !paletaEdit.sabor || !paletaEdit.descricao || !paletaEdit.foto || !paletaEdit.preco) {
    return res.status(400).send({ message: "Você não preencheu todos os dados para editar o café!" });
  }
  const updateCoffee = updateCoffeeService(idParam, coffeeEdit);
  res.send(updateCoffee);
};

export const deleteCoffeeController = (req, res) => {
  const idParam = Number(req.params.id);
  if (!idParam) {
    return res.status(404).send({ message: "Café não encontrado" })
  }
  deleteCoffeeService(idParam);
  res.send({message: 'Café excluido com sucesso'});
};
