import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "aws.connect.psdb.cloud",
    port: 3306,
    username: "igbw8i274a37mbbnilaa",
    password: "pscale_pw_dIzNXLpHQ5aP73smgo7qh79zl0EsVjiYOHUB06GTWJi",
    database: "setsuzu",
    synchronize: false,
    logging: true,
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"],
    subscribers: [],
    ssl: {}
});