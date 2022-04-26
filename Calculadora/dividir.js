function dividir(numA, numB) {
    if (numA == 0 || numB == 0){
        console.log("Não se pode dividir por zero");
    } else {
        let div = numA / numB;
        console.log(numA + " / " + numB + " = " + div);
    }
}

module.exports = dividir;