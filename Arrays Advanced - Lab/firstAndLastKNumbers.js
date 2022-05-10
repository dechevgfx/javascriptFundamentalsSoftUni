function firstLastKElements(arr) {
    let index = arr.shift() // numbers to take
    let firstKElement = arr.slice(0, index)
    let lastKElement = arr.slice(-index)
    console.log(firstKElement.join(" "))
    console.log(lastKElement.join(" "))
}
firstLastKElements([2, 7, 8, 9])