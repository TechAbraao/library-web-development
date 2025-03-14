import { Router } from 'express'
import adicionandoLivro from '../controllers/LivroController.js'
import registrarUsuario from '../controllers/UsuarioController.js'

const routes = Router()

routes.get("/inicio", (req, res) => {
    res.status(200).render("template")
})
routes.get("/cadastro", (req, res) => {
    res.status(200).render("cadastroUsuario")
})
routes.post("/cadastro/processamento", registrarUsuario)


routes.get("/novo-livro", adicionandoLivro)

export default routes