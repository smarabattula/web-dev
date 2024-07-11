const fs = require("fs");


fs.readFile("./message.txt","utf8", (err, data) => {
    if (err){
        throw err;

    }
    console.log(data);
})

fs.writeFile("./message1.txt", "Ello", (err) => {
    if (err) throw err;
    console.log("Write to file done!")
})

