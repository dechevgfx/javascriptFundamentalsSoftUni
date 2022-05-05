function addSubtract(fNum, sNum, tNum) {
    function add(firstNum, secondNum) {
        return firstNum + secondNum
    }

    function subtrc(sum, lastNum) {
        return sum - lastNum
    }

    let sumOfTwo = add(fNum, sNum)
    let finalResult = subtrc(sumOfTwo, tNum)

    console.log(finalResult)
}
addSubtract(2, 2, 5)