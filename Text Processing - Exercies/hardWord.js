function hardWord(array) {
  let arrayWithWords = array.pop()
  let splitedText = array.shift().split(' ')

  for (let word of arrayWithWords) {
    let wordLen = word.length
    let blank = '_'.repeat(wordLen)
    for (let index = 0; index < splitedText.length; index++) {
      if (splitedText[index] === blank) {
        splitedText[index] = word
      } else if (splitedText[index] === blank + '.') {
        splitedText[index] = word + '.'
      } else if (splitedText[index] === blank + ',') {
        splitedText[index] = word + ','
      }
    }
  }
  console.log(splitedText.join(' '))
}
hardWord([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained'],
])

//  let wordsArray = words.split(', ')
// for (const word of wordsArray) {
//     let template = '_'.repeat(word.length)
//     sentance = sentance.replace(template, word)
//   }
//   console.log(sentance)
// }
