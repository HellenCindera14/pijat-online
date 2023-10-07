import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "aws.connect.psdb.cloud",
  port: 3306,
  username: "5entlv6yjegvydsya1z8",
  password: "pscale_pw_ua3n4VKB0Sc8HXgqLkISksu1g8imqtYD3YcspHSCzgA",
  database: "setsuzu",
  synchronize: false,
  logging: true,
  entities: ["src/entities/*.ts"],
  migrations: ["src/migrations/*.ts"],
  subscribers: [],
  ssl: {},
});
