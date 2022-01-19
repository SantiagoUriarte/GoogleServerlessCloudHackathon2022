import express, { Request, Response, NextFunction } from "express";

const app = express();
const port = 3000;

app.get("/santi", (req, res) => {
  res.send("Hello Santiago");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
