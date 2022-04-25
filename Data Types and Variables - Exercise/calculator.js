function calculator(charOne, operator, charTwo){
    switch(operator){
        case "+": result = Number(charOne) + Number(charTwo);break;
        case "-": result = Number(charOne) - Number(charTwo);break;
        case "/": result = Number(charOne) / Number(charTwo);break;
        case "*": result = Number(charOne) * Number(charTwo);break;
    }
    console.log(result.toFixed(2))
}
calculator(2, '/', 3)