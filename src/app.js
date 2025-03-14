import express from 'express'
import routes from "./router/router.js"
import dotenv from 'dotenv'
import database from './configs/database.js'

dotenv.config()

const app = express()
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', './src/views')

const URLPrefix = "livraria"
app.use(`/${URLPrefix}/`, routes)

const HOST = process.env.HOST 
const PORT = process.env.PORT

app.listen(PORT, () => {
    database.sync()
    console.log(`Servidor: http://${HOST}:${PORT}/${URLPrefix}/<end-point>`)
})