function special(num){
    let sum = 0
    let finalResult = ""
    for(let digit = 1; digit <= num; digit++) {
        digit = digit.toString()
        for (let secondDigit = 0; secondDigit < digit.length; secondDigit++){
            sum += Number(digit[secondDigit])
        }
        finalResult = sum === 5 || sum === 7 || sum === 11;
            console.log(finalResult ? `${digit} -> True` : `${digit} -> False`);
    sum = 0
}
}
special(20)
