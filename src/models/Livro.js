import { Model, DataTypes } from 'sequelize';
import database from '../configs/database.js';

class Livro extends Model {}

Livro.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    autor: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    dataPublicacao: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    editora: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    quantidadePaginas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    genero: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    sinopse: {
      type: DataTypes.TEXT(400),
      allowNull: false,
    },
    capa: {
      type: DataTypes.STRING(200),
      allowNull: false,
    }

  },
  {
    sequelize: database,
    modelName: 'Livro',
  }
);

export default Livro;
