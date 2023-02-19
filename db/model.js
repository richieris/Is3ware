import { Sequelize } from "sequelize";
import db from "../db/connection";

const { DataTypes } = Sequelize;

const User = db.define(
  "users",
  {
    title: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DOUBLE,
    },
  },
  {
    freezeTableName: true,
  }
);

export default User;
