function multiplicar(numA, numB){
    if (numA == 0 || numB == 0){
        console.log(0);
    } else {
        let mult = numA * numB
        console.log(numA + " x " + numB + " = " + mult);
    }
}

module.exports = multiplicar;