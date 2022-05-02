function power(number, pow) {
    let result = 1
    for (let index = 0; index < pow; index++) {
        result *= number;
    }
    console.log(result)
}
power(2, 10)