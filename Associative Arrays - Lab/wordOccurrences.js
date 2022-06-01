function occur(array) {
    let mapped = new Map();
    for (let word of array) {
        if (!mapped.has(word)) {
            mapped.set(word, 0);
        }
        mapped.set(word, mapped.get(word) + 1);
    }

    let sorted = Array.from(mapped);
    sorted.sort((a, b) => b[1] - a[1]);

    for (let [word, words] of sorted) {
        console.log(`${word} -> ${words} times`);
    }
}
occur(['az', 'tr', 'tq', 'asdasd', 'asdasd', 'asdasd'])