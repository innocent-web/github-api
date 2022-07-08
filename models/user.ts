import { Sequelize, DataTypes, Model } from 'sequelize';
import db from "../config/db.config"

export class User extends Model {}
User.init({
  id:{
    type: DataTypes.NUMBER,
    autoIncrement:true,
    primaryKey:true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING
  },
  token: {
    type: DataTypes.STRING
  },
  createdAt:{
    type: DataTypes.DATE
  },
  updatedAt:{
    type: DataTypes.DATE
  }
}, {
  // Other model options go here
  sequelize:db, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});
try {
  db.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
/*
export const UserInstance = db.define('User', {
  id:{
    type: DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING
  },
  token: {
    type: DataTypes.STRING
  }
});
*/