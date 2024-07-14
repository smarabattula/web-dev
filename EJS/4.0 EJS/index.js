import express from "express";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

const port = 3000;
app.use(morgan("short"));

app.get("/", (req,res)=>{
    let dayType = "weekday";
    let message = "time to work!";
    const day =new Date().getDay()
    if([0,6].includes(day)){
        dayType = "weekend";
        message = "enjoy your work free time!";
    }
    res.render(__dirname + "/views/index.ejs", {dayType: dayType, message: message});
});
app.listen(port, () => {

    console.log(`Listening on port ${port}`);
});
