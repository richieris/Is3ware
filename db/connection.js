import { Sequelize } from "sequelize";

const db = new Sequelize("dmp_kamet", "root", "Rishirocks292", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
