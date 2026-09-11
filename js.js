console.log("Hello, world.");
console.log("First Javascript");


const myName = "Philip Alexander Juayong",
    myNumber = 9940369664,
    myAdress = "Hda Sta Teresa, Brgy. Alicante E.B Magalona";


let age = 20;

console.log(`Name: ${myName}`);
console.log(`Age: ${age}`);
console.log(`Number: ${myNumber}`);
console.log(`Address: ${myAdress}`);

//Functions

function greet(name) {
    return `Good Morning, ${name}!`;

}

function mdas(num1, num2, operator,) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "Invalid operator";


    }
}
console.log(greet("Rene"));



console.log("Multiplication:" + mdas(5, 3, "*"));
console.log("Division:" + mdas(5, 3, "/"));
console.log("Subtraction:" + mdas(5, 3, "-"));
console.log("Addition:" + mdas(5, 3, "+"));