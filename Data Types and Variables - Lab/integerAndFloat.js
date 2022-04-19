function integerFloat(number, numberOne, numberTwo) {
    let result = number + numberOne + numberTwo
    let resultAsString = result.toString()
    let itsFloat = resultAsString.includes(".")
    if (itsFloat) {
        console.log(`${result} - Float`)
    } else {
        console.log(`${result} - Integer`)
    }
}
integerFloat(9, 100, 1.1)