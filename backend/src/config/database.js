const mongoose = require("mongoose");
mongoose.Promise = global.Promise; //Apenas para tirar a mensagem de advertencia da biblioteca de Promise do mongoose

module.exports = mongoose.connect("mongodb://localhost/todo");