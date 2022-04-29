function equal(array) {
    let hasFoundResult = false

    for (let i = 0; i < array.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let leftIndex = 0; leftIndex < i; leftIndex++) {
            currentNumberForLeft = array[leftIndex];
            leftSum += currentNumberForLeft
        }

        for (let rightIndex = i + 1; rightIndex < array.length; rightIndex++) {
            currentNumberForRight = array[rightIndex];
            rightSum += currentNumberForRight
        }

        if (leftSum === rightSum) {
            console.log(i)
            hasFoundResult = true
            break
        }
    }
    if (!hasFoundResult) {
        console.log('no')
    }
}
equal([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])