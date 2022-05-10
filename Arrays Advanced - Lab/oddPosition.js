function splitArray(arr) {
    reversedArray = arr.reverse()
    let reversed = []
    for (let i = 0; i < reversedArray.length; i++) {
        if (i % 2 === 0) {
            reversed.push(reversedArray[i] * 2)

        }
    }
    console.log(reversed.join(" "))
}
splitArray([3,
    0,
    10,
    4,
    7,
    3])


function processOddNum(arr) {
    let multiplyedAndReversed = arr
        .filter((arr, index) => index % 2 == 1)
        .map(index => 2 * index)
        .reverse();
    console.log(multiplyedAndReversed.join(' '));
}
processOddNum([3,
    0,
    10,
    4,
    7,
    3])