const catalogo = require("./database/catalogo.json")

// teste git

const adicionarFilme = (codigo, titulo, duracao, atores, anoDeLancamento, emCartaz) => {
    novoFilme = { 
        codigo, titulo, duracao, atores, anoDeLancamento, emCartaz,
    }
    catalogo.push(novoFilme)
}
adicionarFilme(2, "Indiana Jones", 100, ["Harrison Ford"], 1984, false)


function buscarFilme(codigo) {
    console.log("Função buscarFilme:")
    console.log(catalogo[codigo])
    console.log("")
}
buscarFilme(1);


function alterarStatusEmCartaz(codigo){
    catalogo[codigo].emCartaz = !catalogo[codigo].emCartaz 
}
alterarStatusEmCartaz(2)

const listarTodosOsFilmes = (catalogo) => {
    console.log("Função listarTodosOsFilmes")
    for (i = 0; i < catalogo.length; i++){
        console.log(catalogo[i])
    }
    console.log("")
}
listarTodosOsFilmes(catalogo)

const listarFilmesEmCartaz = (catalogo) => {
    console.log("Função listarFilmesEmCartaz:")
    for (i = 0; i < catalogo.length; i++){
        if (catalogo[i].emCartaz === true){
            console.log(catalogo[i])
        }
    }
}
listarFilmesEmCartaz(catalogo)

