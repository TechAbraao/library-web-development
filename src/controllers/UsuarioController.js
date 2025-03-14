import Usuario from "../models/Usuario.js";

export default function registrarUsuario(req, res) {
    const { usuario, email, senha } = req.body
    Usuario.create({
        nome: usuario,
        email: email,
        senha: senha,
    })
    res.redirect(`/livraria/${usuario}`)
}