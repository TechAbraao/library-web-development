import { Model, DataTypes } from 'sequelize';
import database from '../configs/database.js';

class Person extends Model {}

Person.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    sobrenome: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    telefone: {
      type: DataTypes.STRING(11),
      allowNull: false,
    },
  },
  {
    sequelize: database,
    modelName: 'Pessoa',
  }
);

export default Person;
