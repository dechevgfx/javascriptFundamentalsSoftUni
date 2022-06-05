function solve(text, word) {
    let textArr = text.split(" ");
    let count = 0;

    for (let currentWord of textArr) {
        if (currentWord === word) {
            count++
        }
    }
    console.log(count)
}