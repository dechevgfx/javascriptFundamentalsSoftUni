function rotation(arr, remover) {
    let removedArrElements = arr.splice(0, remover)
    let result = arr.concat(removedArrElements) //.concat - конкатенира два масива пример: a = [2, 4, 5]  b = [6, 9] ======= a.concat(b) = [2, 4, 5, 6, 9]
    console.log(result.join(" "))
}
rotation([51,47,32,61,21], 2)




///2 variant ->

function rotation(arr, remover) {
    for (let i = 0; i < remover; i++) {
        let firstElement = arr[0];
        for (let j = 0; j < arr.length - 1; j++) {
            arr[j] = arr[j + 1];
        }
        let lastIndex = arr.length - 1
        arr[lastIndex] = firstElement
    }
    console.log(arr.join(" "))
}