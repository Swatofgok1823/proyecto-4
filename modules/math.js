const math= {};

function getRandomInt(max) {
    return Math.floor(Math.random( ) * max);
  }

//define la funcion sumar
function add(a,b) {
    return a + b;
}


//define la funcion restar
function substract(a,b) {
    return a - b;
}

//defie la funcion multiplicar 
function multiply(a,b) {
    return a * b;
}

// define la funcion dividir
function divide(a,b) {
    if(b == 0){
        return "Error, no se puede dividir ente 0"
    }else{
    return a / b;
    }
}



math.add = add; 
math.substract = substract; 
math.multiply = multiply;
math.divide = divide; 
math.random= getRandomInt;

module.exports = math;