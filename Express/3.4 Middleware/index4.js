import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

let bandName = "";

function generateBandName(req, res, next){
  console.log(req.body);
  bandName = req.body["street"] + " "+ req.body["pet"];
  next();
};

app.use(generateBandName);
app.use(morgan("common"));

app.get("/",(req,res)=>{
res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) =>{
  console.log(req.body);
  res.send(`<h2> Your Band Name is </h2> <h3>${bandName} </h3>`)
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
