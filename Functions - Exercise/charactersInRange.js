function char(first, second) {
    let firstSymbolAsNumber = first.charCodeAt(0)
    let secondSymbolAsNumber = second.charCodeAt(0)
    let smallestNumber = Math.min(firstSymbolAsNumber, secondSymbolAsNumber)
    let biggestNumber = Math.max(firstSymbolAsNumber, secondSymbolAsNumber)
    let result = []

    for (let index = smallestNumber + 1; index < biggestNumber; index++) {
        let currentElement = String.fromCharCode(index)
        result.push(currentElement)

    }
    console.log(result.join(" "))
}
char("a", "q")