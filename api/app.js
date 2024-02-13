import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

express.json();

app.get("/", (req, res) => {
  res.send("Hello World");
});

export { app };
