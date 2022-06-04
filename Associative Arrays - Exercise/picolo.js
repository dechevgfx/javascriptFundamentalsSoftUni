function parking(array) {
    let parkingSpace = {};
    for (let element of array) {
        let [direction, carNumber] = element.split(', ');
        switch (direction) {
            case 'IN':
                parkingSpace[carNumber] = direction
                break;
            case 'OUT':
                delete parkingSpace[carNumber]
                break;


        }
    }
    let arrayOfNumbers = Object.keys(parkingSpace);
    let sorted = arrayOfNumbers.sort((a, b) => {
        return a.localeCompare(b);
    });

    if (sorted.length === 0) {
        console.log("Parking Lot is Empty")
    } else {
        console.log(sorted.join("\n"));
    }
}
parking(['IN, CA2844AA',

    'IN, CA1234TA',

    'OUT, CA2844AA',

    'IN, CA9999TT',

    'IN, CA2866HI',

    'OUT, CA1234TA',

    'IN, CA2844AA',

    'OUT, CA2866HI',

    'IN, CA9876HH',

    'IN, CA2822UU']);
parking(['IN, CA2844AA',

    'IN, CA1234TA',

    'OUT, CA2844AA',

    'OUT, CA1234TA']);