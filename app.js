const { bgCyan } = require('colors');
const math = require('./modules/math');

require('colors');

console.clear();

const main = async() =>{

console.log("************------------*******".red)
console.log("  +".blue, " FUNCIONES MATEMATICAS ".bgBlue, "  +".blue)
console.log("      Numeros al azar       ".bgCyan)
    const firstNumber= math.random(21)
    const secondNumber= math.random(21)
    const varSuma = math.add(firstNumber,secondNumber);
    const varResta= math.substract(firstNumber,secondNumber)
    const varMultiplicacion= math.multiply(firstNumber,secondNumber)
    const varDivision= math.divide(firstNumber,secondNumber)

    console.log(`1er numero: ${firstNumber} 2do numero: ${secondNumber}`);
    console.log(`SUMA: ` + `${varSuma}`); 
    console.log(`RESTA: ${varResta}`);
    console.log(`MULTIPLICACION: ${varMultiplicacion}`);
    console.log(`DIVISION: ${varDivision}`);
console.log("************------------*******".red.bgRed)
}
main()
   

