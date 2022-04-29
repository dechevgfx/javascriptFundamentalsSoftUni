function maxNum(arr) {
    let topInteger = []
    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        let isTop = true
        for (let j = i + 1; j < arr.length; j++) {
            let nextElement = arr[j];

            if (nextElement >= currentElement) {
                isTop = false
                break
            }
        } if (isTop) {
            topInteger.push(currentElement)
        }
    }
    console.log(topInteger.join(" "))
}
maxNum([4, 41, 34, 20])