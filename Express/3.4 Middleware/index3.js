import express from "express";
import morgan from "morgan";
const app = express();
const port = 3000;

function logger(req, res, next){
  console.log("Req method: "+ req.method);
  console.log("Req URL: "+ req.URL);
  // ***IMP*** Use this line to get to the next tlines in code!!!
  next();
}
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
