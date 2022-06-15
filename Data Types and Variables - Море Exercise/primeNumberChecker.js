function isPrimeNum(number){
let isPrime = true;
if (number === 1) {
    console.log(false);
}
else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(true);
    } else {
        console.log(false);
    }
}
else {
    console.log(false);
}
}
isPrimeNum(25)

console.log(false)