


function calculator(num1, num2, operator) {
    let result = 0


let sum = num1 + num2
let sub = num1 - num2
let pow = num1 * num2
let div = num1 / num2


    switch (operator) {
        case "multiply":
            result = pow
            break;
        case "divide":
            result = div
            break;
        case "add":
            result = sum
            break;
        case "subtract":
            result = sub
            break;


    }
    console.log(result)
}
calculator(2, 10, "pow")

