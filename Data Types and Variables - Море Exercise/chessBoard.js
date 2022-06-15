function chessBoard(number) {
    let boardSize = Number(number)
    let temporarlyColour = 'black'
    let lastColor = ''
    console.log('<div class="chessboard">')
 
    for (let row = 1; row <= boardSize; row++) {
        console.log('  <div>')
 
        for (let col = 1; col <= boardSize; col++) {
            console.log(`    <span class="${temporarlyColour}"></span>`);
 
            lastColor = temporarlyColour
            temporarlyColour = lastColor === 'black' ? 'white' : 'black'
        }
 
        console.log('  </div>')
        if (boardSize % 2 === 0) {
            lastColor = temporarlyColour
            temporarlyColour = lastColor === 'black' ? 'white' : 'black'
        }
    }
 
    console.log('</div>')
}
chessBoard(3)