function magic(array, n) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            let sum = array[i] + array[j]
            if (sum === n) {
                console.log(`${array[i]} ${array[j]}`)
            }
        }
    }
}
magic([14,20,60,13,7,19,8], 27)