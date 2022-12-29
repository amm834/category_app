import express from 'express'
import {createServer} from 'http'
import bodyParser from "body-parser";
import homeRouter from "./routes/home.js";
import categoryRouter from "./routes/category.js";
import mongoose from 'mongoose';
import fs from "fs";
import path from "path";
import {Category} from "./models/category.js";

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log('Connected!'));


const seedCategory = () => {
    const file = fs.readFileSync(path.join('category.data.json'), 'utf-8')
    const categoires = JSON.parse(file)['data']

    categoires.forEach(category => {
        Category.create(category)
            .then(res => {
                console.log(res)
            })
    })

}

// un comment this and run your server then comment this
// seedCategory()

const app = express()
const server = createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.use('/', homeRouter)
app.use('/api/categories', categoryRouter)

server.listen(3000, () => {
    console.log(`Server is running at port 3000`)
})