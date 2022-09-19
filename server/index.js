import * as dotenv from 'dotenv'

dotenv.config()
import mongoose from 'mongoose'
import cors from 'cors'
import express from 'express'

import memoryRouter from "./routers/memoryRouter.js";

const app = express()
app.use(express.json({limit: '20mb'}))
app.use(cors())

app.use('/memories', memoryRouter)

app.listen(process.env.PORT, () => {
    mongoose
        .connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log('connected to db'))
        .catch((err) => console.log(err))
})