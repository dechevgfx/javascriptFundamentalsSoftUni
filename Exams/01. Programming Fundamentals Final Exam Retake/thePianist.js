function pianist(array) {
  let pieceCount = array.shift()
  let pieceArrayOfObjects = []
  for (let index = 0; index < pieceCount; index++) {
    let splittedPiece = array[index].split('|')
    pieceArrayOfObjects.push({
      piece: splittedPiece[0],
      composer: splittedPiece[1],
      key: splittedPiece[2],
    })
  }
  for (let index = pieceCount; index < array.length; index++) {
    let splittedComands = array[index].split('|')
    let command = splittedComands[0]

    if (command == 'Add') {
      let currPiece = splittedComands[1]
      let currComposer = splittedComands[2]
      let currKey = splittedComands[3]

      const isFound = pieceArrayOfObjects.some((element) => {
        if (element.piece == currPiece) {
          return true
        }
        return false
      })
      if (!isFound) {
        pieceArrayOfObjects.push({
          piece: currPiece,
          composer: currComposer,
          key: currKey,
        })
        console.log(
          `${currPiece} by ${currComposer} in ${currKey} added to the collection!`,
        )
      } else {
        console.log(`${currPiece} is already in the collection!`)
      }
    } else if (command == 'Remove') {
      let currPiece = splittedComands[1]
      const isFound = pieceArrayOfObjects.some((element) => {
        if (element.piece == currPiece) {
          return true
        }
        return false
      })
      if (isFound) {
        let indexOf = pieceArrayOfObjects.findIndex((object) => {
          return object.piece === currPiece
        })
        pieceArrayOfObjects.splice(indexOf, 1)
        console.log(`Successfully removed ${currPiece}!`)
      } else {
        console.log(
          `Invalid operation! ${currPiece} does not exist in the collection.`,
        )
      }
    } else if (command == 'ChangeKey') {
      let currPiece = splittedComands[1]
      let currKey = splittedComands[2]
      const isFound = pieceArrayOfObjects.some((element) => {
        if (element.piece == currPiece) {
          return true
        }
        return false
      })
      if (isFound) {
        let indexOf = pieceArrayOfObjects.findIndex((object) => {
          return object.piece === currPiece
        })
        pieceArrayOfObjects[indexOf].key = currKey
        console.log(`Changed the key of ${currPiece} to ${currKey}!`)
      } else {
        console.log(
          `Invalid operation! ${currPiece} does not exist in the collection.`,
        )
      }
    } else if (command == 'Stop') {
      pieceArrayOfObjects.forEach((singlePiece) => {
        console.log(
          `${singlePiece.piece} -> Composer: ${singlePiece.composer}, Key: ${singlePiece.key}`,
        )
      })
    }
  }
}
pianist([
  '3',

  'Fur Elise|Beethoven|A Minor',

  'Moonlight Sonata|Beethoven|C# Minor',

  'Clair de Lune|Debussy|C# Minor',

  'Add|Sonata No.2|Chopin|B Minor',

  'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',

  'Add|Fur Elise|Beethoven|C# Minor',

  'Remove|Clair de Lune',

  'ChangeKey|Moonlight Sonata|C# Major',

  'Stop',
])
