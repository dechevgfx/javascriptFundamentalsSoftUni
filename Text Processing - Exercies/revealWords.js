function reveal(words, sentance) {
  let wordsArray = words.split(', ')
  for (const word of wordsArray) {
    let template = '*'.repeat(word.length)
    sentance = sentance.replace(template, word)
  }
  console.log(sentance)
}
reveal(
  'great',

  'softuni is ***** place for learning new programming languages',
)
