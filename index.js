import express from "express"
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors())

const port = process.env.PORT || 3002;

app.get('/', (req, res) => {
    res.send('Olá')
});

app.listen(port, () => {
    console.log(`Rodando em http://localhost:${port}`);
})
