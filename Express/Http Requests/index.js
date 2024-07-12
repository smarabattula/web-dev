import express from "express";

const app = express();

let port = 3000;

app.get("/", (req, res) => {
    console.log(req.body);
    res.send("<h1>Hello World!</h1>");
})

app.get("/contact", (req, res) => {
    console.log(req.body);
    res.send("<p>Contact Me on email!</p>");
})

app.get("/about", (req, res) => {
    console.log(req.body);
    res.send("<h1>About Me!</h1>");
})

app.listen(port, () => {

    console.log("Server Running From Port: "+ port);
})
