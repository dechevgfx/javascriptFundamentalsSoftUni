function numbersReverse (numbers, arr){
    let newArr = []
    let output = []
for (let i = 0; i < numbers; i++){
newArr.push(arr[i])
}
for(let i = newArr.length - 1; i >= 0; i--){
output += newArr[i]
output += " " //слага интервал между елементите които са добавени на горния ред.
}
console.log(output)
}
    numbersReverse(3, [10, 20, 30, 40, 50])





//function numbersReverse (numbers, arr){
//let newArr = []
//for (let i = numbers - 1; i >= 0; i--){
//newArr.push(arr[i])
//}
//console.log(newArr.join(" "))
//}
//numbersReverse(3, [10, 20, 30, 40, 50])