import { Router } from 'express'
import incrementPerson from '../controllers/PersonController.js' 

const routes = Router()

routes.get("/", (req, res) => {
    res.status(200).send("Hello, World!")
})

routes.get("/increment", incrementPerson)

routes.get("/hello-world", (req, res) => {
    res.status(200).render("index", {
        titulo: 'Eu sou o Abraão'
    }) 
})



export default routes