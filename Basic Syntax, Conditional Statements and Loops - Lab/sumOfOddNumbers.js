function sumOfOdds(n) {
    let num = Number(n);
    let sum = 0;
    let counter = 0;


    for (let i = 1; i <= n * 2; i += 2) {
        console.log(i);
        counter++;
        sum += i;

    } console.log(`Sum: ${sum}`)
}