import { Sequelize } from "sequelize";
import dotenv from "dotenv/config";

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  }
);

export default sequelize;
