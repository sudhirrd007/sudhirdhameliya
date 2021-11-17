let connect = require("connect");

let app = connect();

let helloworld = (req, res, next) => {
    res.writeHead(200, {"Cotent-type": "text/html"});
    res.end("<h1> This is Node </h1>");
}

let goodBuyWorld = (req, res, next) => {
    res.write("Good buy world");
    res.end();
}

let index = (req, res, next) => {
    if(req.url == "/") {
        res.writeHead(200);
        res.write("Welocome to HOME PAGE");
        res.end();        
    }
    else {
        res.writeHead(404);
        res.write("PAGE NOT FOUND!!!");
        res.end();        
    }
    res.end();
}

app.use("/hello", helloworld);
app.use("/buy", goodBuyWorld);
app.use("/", index);
app.listen(3000);

console.log("SERVER IS RUNNING");