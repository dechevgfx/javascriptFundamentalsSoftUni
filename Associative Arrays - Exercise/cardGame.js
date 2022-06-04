function card(array) {
    let symbolValues = {
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14,
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1
    };
    let players = {};
    let final = {};

    for (let inputs of array) {
        let splitted = inputs.split(": ");
        let playerName = splitted[0];
        let playerCards = splitted[1];
        playerCards.split(", ");

        let keys = Object.keys(players)
        if (!keys.includes(playerName)) {
            players[playerName] = [];
        }
        players[playerName] = players[playerName].concat(playerCards);
    }

    for (let [playerName, cardArrays] of Object.entries(players)) {
        final[playerName] = 0;
        let playerCardsArray = cardArrays.join(', ').split(", ");
        let onlyUniqePlayersCards = new Set(playerCardsArray);
        let arrayOfPlayerCards = Array.from(onlyUniqePlayersCards)
        for (let card of arrayOfPlayerCards) {
            let splittedEntries = card.split("");
            let type = splittedEntries.pop();
            let cardValue = splittedEntries.join("");
            let points = 0;

            if (Object.keys(symbolValues).includes(cardValue)) {
                points = Number(symbolValues[cardValue]) * Number(symbolValues[type])
            } else {
                points = Number(cardValue) * Number(symbolValues[type])
            }

            final[playerName] += Number(points);
        }

    }
    for (let name in final) {
        console.log(`${name}: ${final[name]}`)
    }
}
card([

    'Peter: 2C, 4H, 9H, AS, QS',

    'Tomas: 3H, 10S, JC, KD, 5S, 10S',

    'Andrea: QH, QC, QS, QD',

    'Tomas: 6H, 7S, KC, KD, 5S, 10C',

    'Andrea: QH, QC, JS, JD, JC',

    'Peter: JD, JD, JD, JD, JD, JD'

])