import { Router } from 'express'
import adicionandoLivro from '../controllers/LivroController.js'

const routes = Router()

routes.get("/inicio", (req, res) => {
    res.status(200).render("template")
})

routes.get("/novo-livro", adicionandoLivro)


export default routes