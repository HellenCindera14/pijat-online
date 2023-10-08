import "reflect-metadata";
import { DataSource } from "typeorm";
require("dotenv").config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST as string,
  port: 3306,
  username: process.env.DB_USERNAME as string,
  password: process.env.DB_PASSWORD as string,
  database: process.env.DB_DATABASE as string,
  synchronize: false,
  logging: true,
  entities: ["src/entities/*.ts"],
  migrations: ["src/migrations/*.ts"],
  subscribers: [],
  ssl: {},
});
