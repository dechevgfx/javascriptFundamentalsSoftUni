function addSubtract(arr) {
    let newArr=[]
    let sumOldArr = 0;
    let sumNewArr = 0;
    for (let i = 0; i < arr.length; i++){
        sumOldArr += arr[i]
        if (arr[i] % 2 === 0){
            newArr.push(arr[i] + i)
            sumNewArr += arr[i] + i
        }else{
            newArr.push(arr[i] - i)
            sumNewArr += arr[i] - i
        }
    }console.log(newArr)
    console.log(sumOldArr)
    console.log(sumNewArr)
}
addSubtract([5,15,23,56,35])