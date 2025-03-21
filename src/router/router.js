import { Router } from 'express'
import adicionandoLivro from '../controllers/LivroController.js'
import RegisterUser from '../controllers/UsuarioController.js'
import { LoginUser } from '../controllers/UsuarioController.js'
import checkAuthenticated from '../middlewares/checkAuthenticated.js'

const routes = Router()

// GET Routers
routes.get("/", (req, res) => {
    res.status(200).redirect("/inicio")
})
routes.get("/inicio", checkAuthenticated, (req, res) => {
    if (req.session.username) {
        res.status(200).render("pages/home", { username: req.session.username })
    }
    res.status(200).render("pages/template")
})
routes.get("/cadastro", (req, res) => {
    res.status(200).render("pages/cadastroUsuario")
})
routes.get("/entrar", (req, res) => {
    if (req.session.username) {
        return res.status(200).redirect("/home")
    }
    res.status(200).render("pages/entrar")
})
routes.get("/home", checkAuthenticated, (req, res) => {
    const usuario = req.session.username
    res.status(200).render("pages/home", { username: usuario })
})
routes.get("/sair", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error("Failed to destroy session:", err);
            return res.status(500).send({ message: "Error closing session" });
        }
        console.log("Session closed successfully.");
        res.status(200).redirect("/inicio");
    });
});

// POST Routers
routes.post("/entrar/", LoginUser)
routes.post("/cadastro/", RegisterUser)


routes.get("/novo-livro", adicionandoLivro)

export default routes