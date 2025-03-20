
import { FindEmail, FindUser, FindPassword } from "../models/Usuario.js"

// This function register user in database
export default async function RegisterUser(req, res) {
    const { usuario, email, senha } = req.body

    if (!usuario || !email || !senha) {
       return res.status(400).send({ "message": "Fill in all fields" })
    }

    const findEmail = await FindEmail(email)
    const findUser = await FindUser(usuario)

    if (findEmail === email) { 
        return res.status(400).send({ "message" : "E-mail already registered. Try another e-mail."})
    }
    if (findUser === usuario) {
        return res.status(400).send({ "message" : "Username already registered. Try another username."})
    }
    
    await Usuario.create({
        nome: usuario,
        email: email,
        senha: senha,
    })

    return res.status(200).send({ "message" : "Registered User!" })
}

// This function logs in the user
export async function LoginUser(req, res) {
    const { usuario, senha } = req.body;
    
    const findUser = await FindUser(usuario)
    const findPassword = await FindPassword(senha)

    if (findUser !== usuario) {
        return res.status(400).send({"message" : "Invalid username."})
    }
    if (findPassword !== senha) {
        return res.status(400).send({"message" : "Invalid password."})
    }

    return res.status(200).send({ "message" : "Login successfully!" })
}

