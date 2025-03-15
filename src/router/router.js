import { Router } from 'express'
import adicionandoLivro from '../controllers/LivroController.js'
import registrarUsuario from '../controllers/UsuarioController.js'
import { verificaUsuario } from '../controllers/UsuarioController.js'

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

routes.post("/entrar/processamento", verificaUsuario)
routes.post("/cadastro/processamento", registrarUsuario)


routes.get("/novo-livro", adicionandoLivro)

export default routes