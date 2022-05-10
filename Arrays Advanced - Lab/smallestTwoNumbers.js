function smallest(arr) {
    let sorted = arr.sort((a, b) => {
        return a - b
    })
    let finalResult = sorted.slice(0, 2);
    console.log(finalResult.join(' '))
}
smallest([2, 35, 22, 56, 20])