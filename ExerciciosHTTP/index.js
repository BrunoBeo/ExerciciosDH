const express = require("express");
const server = express();
const bodyParser = require("body-parser")
const jsonParser = bodyParser.json()

const usuarios = [
    {"id": 1, "nome": "Bruno", "sobrenome": "Béo"},
    {"id": 2, "nome": "Lionel", "sobrenome": "Messi"}
]

server.listen(3060)

server.get("/usuarios", (req,res) => {
    res.send(usuarios)
});

server.get("/usuarios/:id", (req,res) => {
    const {id} = req.params
    const aux = usuarios.find((usuario) => usuario.id == id)
    res.send(aux)
});

server.post("/usuarios", jsonParser, (req,res) => {
    const novo = req.body
    usuarios.push(novo)
    res.send(usuarios)
})

server.delete("/usuarios/:index", (req,res) => {
    const {index} = req.params
    usuarios.splice(index, 1)
    res.send(usuarios)
})