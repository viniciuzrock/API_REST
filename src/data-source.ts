import "dotenv/config"
import "reflect-metadata"
import { DataSource } from "typeorm";
import { Room } from "./entities/Room";
import { Video } from "./entities/Video";
const port = process.env.DB_PORT as number | undefined

//database config
export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: port,//number or undefined
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [`${__dirname}/**/entities/*.{ts,js}`],
    // entities: [Room, Video],
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
    // migrations: [`src/migrations/**.{ts,js}`],
})
console.log(__dirname+ '  AQIO');
