function reverseString(word) {
    let newWord = "";
    for (let lastChar = word.length - 1; lastChar >= 0; lastChar--) {
        newWord += word[lastChar];
    }
    console.log(newWord);
}
reverseString('hello');