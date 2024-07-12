import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

function validatePassword(req, res, next) {
    const password = req.body.password;
    req.userAuthorised = password === "ILoveProgramming";
    next();
  }

app.use(validatePassword);
app.use(morgan("common"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (req.userAuthorised) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.redirect('/');
    // Alternatively: res.sendStatus("401");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
