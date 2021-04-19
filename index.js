var fs = require("fs");
var https = require("https");
var express = require("express");
var app = express();

var serverKeyPath = "tls/server.key";
var serverCrtPath = "tls/server.crt";
var port = 8443;

var options = {
    key: fs.readFileSync(serverKeyPath),
    cert: fs.readFileSync(serverCrtPath)
};

var server = https.createServer(options, app);

app.get("/hello", function (req, res) { 
    res.status(200);
    res.set("Content-Type", "text/plain");
    res.send("Hello, world!");
    res.end();
});

app.use(express.static("public"));

server.listen(port);
