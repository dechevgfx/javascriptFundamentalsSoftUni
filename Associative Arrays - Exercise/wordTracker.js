function tracker(array) {
    let searchingWords = array
        .shift()
        .split(" ");
    let myWords = {};
    for (const elements of searchingWords) {
        myWords[elements] = 0;
    }
    array.forEach(word => {
        if (myWords.hasOwnProperty(word)) {
            myWords[word]++;
        }
    });
    let sorted = Object.entries(myWords).sort((a, b) => b[1] - a[1]);
    sorted.forEach(line => {
        console.log(`${line[0]} - ${line[1]}`)
    })
}
tracker([

    'this sentence',

    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'

]);
tracker([

    'is the',

    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])