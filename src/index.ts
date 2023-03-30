import express from "express";
import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(() => {
    const app = express();
    app.use(express.json());//define type data application

    app.get("/", (req, res) => {
        return res.json("Success");
    });

    return app.listen(process.env.PORT);
}).catch((err) => {
    console.log(err);
})