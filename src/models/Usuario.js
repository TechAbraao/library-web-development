import { DataTypes, Model } from "sequelize";
import database from "../configs/database.js";

class Usuario extends Model {}

async function FindEmail(email) {
    if (typeof email !== "string") {
        throw new Error("This format e-mail is invalid!");
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        throw new Error("This format e-mail is invalid!");
    }

    const findingEmail = await Usuario.findOne({
        where: { email: email }
    });

    return findingEmail ? findingEmail.email : null;
}

async function FindUser(user) {
    if (typeof user !== "string") {
        throw new Error("This username format is invalid!")
    }

    const findingUser = await Usuario.findOne({
        where: { nome: user }
    })
 
    return findingUser ? findingUser.nome : null
}

async function FindPassword(password) {
    const findingPassword = await Usuario.findOne({
        where: { senha: password }
    })

    return findingPassword ? findingPassword.senha : null
}

Usuario.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
        },
    nome: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING(60),
        unique: true,
    },
    senha: {
        type: DataTypes.STRING(15),
        allowNull: false,
    } 
}, {
    sequelize: database,
    modelName: 'Usuario',
}
)


export { Usuario, FindEmail, FindUser, FindPassword };