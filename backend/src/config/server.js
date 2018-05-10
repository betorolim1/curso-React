const port = 3003;

const bodyParser = require("body-parser");
const express = require("express");
const server = express();
const allowsCors = require("./cors");

server.use(bodyParser.urlencoded({ extended: true })); //Sempre que tiver server.use é um middle
server.use(bodyParser.json());
server.use(allowsCors);

server.listen(port, function(){
    console.log(`BackEnd rodando na porta ${port}.`);
})

module.exports = server;