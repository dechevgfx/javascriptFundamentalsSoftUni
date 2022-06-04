// function miner(array) {
//     let finalArr = [];
//     for (let index = 0; index < array.length; index += 2) {
//         let element = array[index];
//         let quantity = array[index + 1];

//         if (finalArr.includes(element)) {
//             let indexOfArr = finalArr.indexOf(element);
//             finalArr[indexOfArr + 1] += +quantity
//         } else {
//             finalArr.push(element);
//             finalArr.push(Number(quantity));
//         }

//     }
//     for (let i = 0; i < finalArr.length; i+=2) {
//         console.log(`${finalArr[i]} -> ${finalArr[i + 1]}`);
//     }

// }


function miner(array) {
    let map = new Map();
    for (let index = 0; index < array.length; index += 2) {
        let element = array[index];
        let quantity = array[index + 1];
        if (!map.has(element)) {
            map.set(element, 0);
        }
        let updatedQnt = map.get(element);
        updatedQnt += +quantity;
        map.set(element, updatedQnt);
    }
    for (const item of map) {
        console.log(`${item[0]} -> ${item[1]}`)
    }
}
miner([

    'Gold',

    '155',

    'Silver',

    '10',

    'Copper',

    '17',
    'Gold',

    '155',

])