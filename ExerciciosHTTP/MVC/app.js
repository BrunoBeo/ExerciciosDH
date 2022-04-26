const express = require('express');
const mainController = require('./mainController')
const app = express();

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
    
})

app.get('/', (req, res) =>
    res.send("Servidor rodando")
)
app.get('/home', mainController.home)
 