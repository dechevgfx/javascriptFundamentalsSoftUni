function memory(array) {

    let initialSeq = array
        .shift()
        .split(" ");

    for (let index = 0; index < array.length; index++) {

        while (array[index] !== 'end') {
            let guess = array[index]
                .split(" ")
                .map(Number);
            let moveNumber = index + 1;
            let middle = Math.round(initialSeq.length / 2);

            if (guess[0] == guess[1] || guess[0] < 0 || guess[1] < 0 || guess[0] >= initialSeq.length || guess[1] >= initialSeq.length) {
                initialSeq.splice(middle, 0, `-${moveNumber}a`);
                initialSeq.splice(middle + 1, 0, `-${moveNumber}a`);
                console.log('Invalid input! Adding additional elements to the board');

            } else if (initialSeq[guess[0]] == initialSeq[guess[1]]) {
                console.log(`Congrats! You have found matching elements - ${initialSeq[guess[0]]}!`);
                initialSeq.splice(guess[0], 1);
                if (guess[0] > guess[1]) {
                    initialSeq.splice(guess[1], 1);
                } else {
                    initialSeq.splice(guess[1] - 1, 1);
                }


            } else if (initialSeq[guess[0]] != initialSeq[guess[1]]) {
                console.log("Try again!")
            }

            index++
            if (array[index] == 'end') {

                if (initialSeq.length > 0) {
                    console.log("Sorry you lose :(");
                    console.log(initialSeq.join(" "));
                }else {
                    console.log(`You have won in ${moveNumber} turns!`);
                }
            }else {
                if (initialSeq.length < 1) {
                    console.log(`You have won in ${moveNumber} turns!`);
                    break;
                }
            }

        }

    }

}

memory(['a a', '4 0', '0 2', '0 1', '0 1', 'end'])