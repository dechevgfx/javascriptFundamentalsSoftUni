function oddEvenSum(number) {
    let oddSum = 0
    let evenSum = 0
    let numAsStr = number.toString()
for (let index = 0; index < numAsStr.length; index++) {
    let checkNum = Number(numAsStr[index])
    if (checkNum % 2 === 0) {
        evenSum += checkNum
    } else {
        oddSum += checkNum
    }
}
console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
oddEvenSum(435)