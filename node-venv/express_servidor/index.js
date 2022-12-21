const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.send("Seja bem vindo!")
});

app.get("/google", function(req, res){
    res.send("Página do google https://google.com");
});

app.get("/ola/:nome/:cargo", function(req, res){
    res.send("Ola Sr. " + req.params.nome);
    // res.send("<h2>Seu cargo é " + req.params.cargo + "</h2>");
});


app.listen(8081, function(){console.log("Servidor rodando na url http://localhost:8081");});