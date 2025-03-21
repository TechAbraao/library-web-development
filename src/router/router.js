import { Router } from 'express'
import adicionandoLivro from '../controllers/LivroController.js'
import RegisterUser from '../controllers/UsuarioController.js'
import { LoginUser } from '../controllers/UsuarioController.js'

const routes = Router()

// GET Routers
routes.get("/", (req, res) => {
    res.status(200).redirect("/inicio")
})

routes.get("/inicio", (req, res) => {
    if (req.session.username) {
        res.status(200).render("pages/sucesso_login", { username: req.session.username })
    }
    res.status(200).render("pages/template")
})
routes.get("/cadastro", (req, res) => {
    res.status(200).render("pages/cadastroUsuario")
})
routes.get("/entrar", (req, res) => {
    if (req.session.username) {
        res.status(200).redirect("/home")
    }
    res.status(200).render("pages/entrar")
})
routes.get("/home", (req, res) => {
    if (req.session.username) {
        const usuario = req.session.username
        res.status(200).render("pages/home", { username: usuario })

    }
    res.status(400).send({"message" : "You do not have a session for this page."})
})
routes.get("/sair", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send({ "message" : "Error closing session" })
        }
        res.status(200).redirect("/inicio")
        console.log("End Session.")
    })
})

// POST Routers
routes.post("/entrar/", LoginUser)
routes.post("/cadastro/", RegisterUser)


routes.get("/novo-livro", adicionandoLivro)

export default routes