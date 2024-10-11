//Funcion básica
function sumar (a, b = 0, c =0){
    return a+b;
}

console.log('Uso de funcion basica suma (a,b,c)');
console.log('sumar(10,20,30):',sumar(10,20,30));
console.log('sumar(10,20):',sumar(10,20));
console.log('sumar(8):',sumar(8));

//Funcion Flecha
const sumar2 = (a, b = 0, c=0) => {
    return a + b + c;
}

console.log(sumar2(100,200,300));
console.log(sumar2(200));

const sumar3 = (a, b=0) => a / b;

const saludar = () => 'Hola mundo'

console.log('Uso de funcion Flecha sumar (a,b,c)');
console.log(sumar2(500+500));
console.log(sumar2(900));
console.log(saludar());


let num1 =90
let num2 =10
const dividir = (a, b) => a / b;

console.log(dividir(num1,num2))

console.log(`Número 1: ${num1}, Número 2: ${num2}`);
const dividirValores = (num1, num2) => {
    for (let i = 1; i <= 4; i++) {
        if (i === 1) {
            console.log(`Número 1: ${num1}, Número 2: ${num2}`);
        } else {
            const resultado = num1 / num2;
            console.log(`División ${i - 1}: ${resultado}`);
        }
    }
};

// Ejemplo de uso
dividirValores(10, 2);