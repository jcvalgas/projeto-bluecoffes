import express from "express"
import {routes} from './src/routes/coffee.route.js'
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors())
app.use('/coffees', routes)
const port = process.env.PORT || 3002;


app.listen(port, () => {
    console.log(`Rodando em http://localhost:${port}`);
})
