const fs = require('fs');

const caminhoJson = __dirname + "/arquivo.json";
const caminhoTxt = __dirname + "/arquivo.txt";

const conteudoDoArquivoTxt = fs.readFileSync(caminhoTxt, 'utf-8');
const conteudoDoArquivoJson = fs.readFileSync(caminhoJson, 'utf-8');

console.log("Conteúdo do arquivo TXT: " + conteudoDoArquivoTxt);
console.log("Conteúdo do arquivo Json: " + conteudoDoArquivoJson);