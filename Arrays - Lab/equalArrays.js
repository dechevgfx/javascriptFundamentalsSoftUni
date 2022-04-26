function solve(firstArray, secondArray) {
    let areEqual = true
    let sumOfElementsInEqualArray = 0;
    for (let index = 0; index < firstArray.length; index++) {
        firstArray[index] = Number(firstArray[index]);
        sumOfElementsInEqualArray += Number(firstArray[index])

    }
    for (let index = 0; index < secondArray.length; index++) {
        secondArray[index] = Number(secondArray[index]);
    }
    for (let index = 0; index < firstArray.length; index++) {
        if (firstArray[index] !== secondArray[index]) {
            console.log(`Arrays are not identical. Found difference at ${index} index`)
            areEqual = false
            break
        }
    } if (areEqual) {
        console.log(`Arrays are identical. Sum: ${sumOfElementsInEqualArray}`)
    }
}
solve(['10', '20', '300'], ['10', '20', '30'])