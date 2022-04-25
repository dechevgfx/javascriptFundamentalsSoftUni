function sumDigits(input){
    let sum = 0;
    let numAsString = input.toString();
    for (const char of numAsString){
        sum += Number(char)
    }
    console.log(sum)
}


// second way to solve -->

// function sumDigits(input){
//     let sum = 0;
//     let numAsString = input.toString();
//     numAsString.split('').forEach(function(char){
//      sum += Number(char)   
//     })
//     console.log(sum)
// }
// sumDigits(245678)