import express from "express";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  // res.send("Hello");
  res.sendStatus(201);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
