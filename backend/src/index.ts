import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

const HOST: string = process.env.SERVER_HOST
    ? process.env.SERVER_HOST
    : "http://localhost";
const PORT: Number = Number(process.env.SERVER_PORT) | 4000;

dotenv.config();

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`[server]: Server is running at ${HOST}:${PORT}`);
});
