import { config } from "dotenv";
import typeorm from "typeorm";
import Category from "./entities/category.js";
import User from "./entities/user.js";

config(); // Configura las variables de entorno desde el archivo .env

const dataSource = new typeorm.DataSource({
  type: "postgres",
  host: process.env.HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  entities: [Category, User],
});

export { dataSource };
