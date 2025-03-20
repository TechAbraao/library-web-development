import { Router } from 'express'
import adicionandoLivro from '../controllers/LivroController.js'
import RegisterUser from '../controllers/UsuarioController.js'
import { LoginUser } from '../controllers/UsuarioController.js'

const routes = Router()

routes.get("/inicio", (req, res) => {
    res.status(200).render("pages/template")
})
routes.get("/cadastro", (req, res) => {
    res.status(200).render("pages/cadastroUsuario")
})
routes.get("/entrar", (req, res) => {
    res.status(200).render("pages/entrar")
})

routes.post("/entrar/processamento", LoginUser)
routes.post("/cadastro/processamento", RegisterUser)


routes.get("/novo-livro", adicionandoLivro)

export default routes