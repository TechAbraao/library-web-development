import Usuario from "../models/Usuario.js";

export default function registrarUsuario(req, res) {
    const { usuario, email, senha } = req.body
    Usuario.create({
        nome: usuario,
        email: email,
        senha: senha,
    })
    res.status(200).send(`<h1>Cadastrado com sucesso</h1>`)
}

export async function verificaUsuario(req, res) {
    const { usuario, senha } = req.body;
    
    const consultaBanco = await Usuario.findOne({ where: { nome: usuario } });

    if (!consultaBanco) {
        return res.status(400).send(`<h1>Usuário não encontrado</h1>`);
    }
    const senhaEncontradaNoBanco = consultaBanco.dataValues.senha;

    if (senha === senhaEncontradaNoBanco) {
        res.status(200).send(`<h1>Login efetuado com sucesso</h1>`);
    } else {
        res.status(400).send(`<h1>Senha inválida</h1>`);
    }
}
