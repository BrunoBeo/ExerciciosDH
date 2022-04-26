// A constante abaixo servira de base para que possamos relaizar as funções descritas abaixo dela:

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//  1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
// Dica: use a função find .
function authorBornIn1947() {
  books.find(function(nascimento){
    if (nascimento.author.birthYear === 1947)
    console.log("Função 1: " + nascimento.author.name);
    })
}
authorBornIn1947()


// 2 - Retorne o nome do livro de menor nome
//Dica use a função forEach 
function smallerName() {
  books.forEach(function(tamanhoNome){
   nameBook = books.sort(function(a,b){
     return a.name.length - b.name.length;
   })
   })
 console.log("Função 2: " + nameBook[0].name)
}
smallerName()

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
function getNamedBook() {
  books.find(function(tamanhoTitulo){
    if (tamanhoTitulo.name.length === 26)
    console.log("Função 3: " + tamanhoTitulo.name);
  })
}
getNamedBook()


// 4 - Ordene os livros por data de lançamento em ordem decrescente.
// Dica Utiliza a função sort.
function booksOrderedByReleaseYearDesc() {
  const lancamento = books.sort(function(a,b){
    return a.releaseYear - b.releaseYear
  })
  console.log("Função 4:")
  console.log(lancamento)
 }
booksOrderedByReleaseYearDesc()

// 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.
function everyoneWasBornOnSecXX() {
  const contador = [];  
  for (let i=0; i < books.length; i++){
        if (books[i].author.birthYear <= 1999 && books[i].author.birthYear >= 1900){
          contador.push(i)
        }
    }
    if(contador.length == books.length){
      console.log("Função 5: " + true)
    } else {
      console.log("Função 5: " + false)
    }
  }
everyoneWasBornOnSecXX()