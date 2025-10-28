import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/home", (req: Request, res: Response) =>{
    res.send("TypeScript is insane!");
});