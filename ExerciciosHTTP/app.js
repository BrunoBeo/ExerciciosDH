const { read } = require("fs");
const express = require("express");
const app = express();
const http = require("http");

console.log("nodemon")

// criando um servidor

http.createServer((req,res)=>{
    console.log("Rodando servidor na porta 3000")
    res.writeHead(200, {"Content-type":"text/plain"})  
    
    switch(req.url){
        case "/":
            res.end("O Palmeiras nao tem mundial!")
            break;
        case "/contato":
            res.end("Bi-rebaixado e nao tem mundial")
            break;
        default:
            res.end("Voce afetou o Gremio")
    }

}).listen(3000);


// servidor Express

app.get("/", (req,res) =>{
    res.send("Servidor Express")
    console.log("Servidor Express rodando na porta 3030")
})
app.get("/contato", (req,res) => {
    res.send({nome: "Bruno", idade: 25})
    console.log("Servidor Express rodando na porta 3030")
})
app.listen(3030)

