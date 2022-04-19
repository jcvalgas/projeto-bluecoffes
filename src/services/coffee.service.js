const coffees = [
    {
        id: 1,
        sabor: 'Metropolitan Express',
        preco: 10,
        descricao: 'tempor incididunt ut labore et dolore magna aliqua.',
        foto: 'assets/img/coffee-images/large-coffee_ccexpress.png'
    },
    {
        id: 2,
        sabor: 'Citzen Express',
        preco: 5,
        descricao: 'tempor incididunt ut labore et dolore magna aliqua.',
        foto: './assets/img/coffee-images/mug-coffee_ccexpress.png'
    },
    {
        id: 3,
        sabor: 'Irish Coffee',
        preco: 8,
        descricao: 'tempor incididunt ut labore et dolore magna aliqua.',
        foto: './assets/img/coffee-images/coffee-with-cream2_ccexpress.png',
    },
    {
        id: 4,
        sabor: 'Ristretto',
        preco: 3,
        descricao: 'tempor incididunt ut labore et dolore magna aliqua.',
        foto: './assets/img/coffee-images/simple-coffee_ccexpress.png'
    },
    {
        id: 5,
        sabor: 'Caffè corretto',
        preco: 12,
        descricao: 'tempor incididunt ut labore et dolore magna aliqua.',
        foto: './assets/img/coffee-images/coffee-with-cream1_ccexpress.png'
    },
    {
        id: 6,
        sabor: 'Caffè Latte',
        preco: 15,
        descricao: 'tempor incididunt ut labore et dolore magna aliqua.',
        foto: './assets/img/coffee-images/large-coffee_ccexpress.png'
    }
]

export const findAllCoffeesService = () => {
    return coffees;
};

export const findByIdCoffeeService = (paramId) => {
    return coffees.find(element => element.id == paramId);
};

export const createCoffeeService = (newCoffee) => {
    const newId = coffees.length + 1;
    newCoffee.id = newId;
    coffees.push(newCoffee);
    return newCoffee;
};

export const updateCoffeeService = (id, edit) => {
    edit['id'] = id;
    const coffeeIndex = coffees.findIndex(element => element.id == id);
    coffees[coffeeIndex] = edit;
    return edit;
};

export const deleteCoffeeService = (id) => {
    const coffeeIndex = coffees.findIndex(element => element.id == id);
    coffees.splice(coffeeIndex, 1);
};
