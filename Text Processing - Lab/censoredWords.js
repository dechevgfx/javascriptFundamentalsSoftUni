function censored(txt, word) {
    while (txt.includes(word)) {
        txt = txt.replace(word, "*".repeat(word.length));
    }
    console.log(txt)
}
censored("gosho e lud, gosho e lud, gosho e golem, gosho e lud", "gosho")
