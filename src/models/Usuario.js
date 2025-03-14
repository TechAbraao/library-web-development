import { DataTypes, Model } from "sequelize";
import database from "../configs/database.js";

class Usuario extends Model {}

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

export default Usuario;