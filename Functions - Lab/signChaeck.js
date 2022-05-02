function signCh(num1, num2, num3) {
    let result = num1 * num2 * num3
    if (result < 0) {
        console.log("Negative!")
    } else {
        console.log("Positive!")
    }
}
signCh(1, -2, 1)