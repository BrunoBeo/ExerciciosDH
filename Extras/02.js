// Faça um script que receba uma data no formato “dd/mm/aaaa” e escreva a
// data por extenso. Dica: use a função “split” de uma string que quebra a string
// em pedaços dado um separador como argumento da função. Nesse caso, o
// separador é a barra (/) da data.
// Exemplo:
// Para a entrada “22/04/1983” deve ser escrito “22 de abril de 1983”.

const data = new Date();

function dataExtenso(dia, mes, ano){
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", 
                "setembro", "outubro", "novembro", "dezembro"];
    const extenso = (dia + " de " + meses[mes-1] + " de " + ano)
    console.log(extenso)
}

dataExtenso(data.getDate(), data.getMonth(), data.getFullYear())

