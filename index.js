import express from "express"
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors())

const port = process.env.PORT || 3002;

const coffees = [
    {
        id: 1,
        sabor: 'Metropolitan Express',
        preco: 10,
        descricao: 'tempor incididunt ut labore et dolore magna aliqua.',
        foto: './assets/img/coffee-images/large-coffee_ccexpress.png'
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


app.get('/coffees/find-coffees', (req, res) => {
    res.send(coffees)
});

app.get('/coffees/find-coffees/:id', (req, res) => {
    const paramId = req.params.id;
    const choosenCoffee = coffees.find(element => element.id == paramId);
    res.send(choosenCoffee)
})

app.listen(port, () => {
    console.log(`Rodando em http://localhost:${port}`);
})
