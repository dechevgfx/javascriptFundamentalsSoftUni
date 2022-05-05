function palindrome(array) {
    let arrayOfNumbers = array
    let inputL = arrayOfNumbers.length
    const isEqual = (num)=>{
        let startNum = num
        let reversed = Number(num.toString().split("").reverse().join(""))
    if (startNum === reversed) {
        return "true"
    }else{
        return "false"
    }
    }
    for (let index = 0; index < inputL; index++) {
        let element = arrayOfNumbers[index];
        console.log(isEqual(element))
    }

}
palindrome([323, 222, 345])