function party(array) {
    let guestList = {
        vip:[],
        regular:[]
    };
    let guest = array.shift();

    while(guest != 'PARTY'){

        let firstChar = guest[0];
        if (isNaN(firstChar)) {
            guestList.regular.push(guest);
        } else {
            guestList.vip.push(guest);
        }
        guest = array.shift();
    }

    for (let guestToCome of array) {
        if (guestList.vip.includes(guestToCome)) {
            let index = guestList.vip.indexOf(guestToCome);
            guestList.vip.splice(index, 1);
        } else if (guestList.regular.includes(guestToCome)){
            let index = guestList.regular.indexOf(guestToCome);
            guestList.regular.splice(index, 1);
        }
    }
    let vipCount = guestList.vip.length;
    let regularCount = guestList.regular.length;


    console.log(vipCount + regularCount);
    console.log(guestList.vip.join("\n"));
    console.log(guestList.regular.join("\n"));
}
party(['7IK9Yo0h',

    '9NoBUajQ',

    'Ce8vwPmE',

    'SVQXQCbc',

    'tSzE5t0p',

    'PARTY',

    '9NoBUajQ',

    'Ce8vwPmE',

    'SVQXQCbc'

]);

party(['m8rfQBvl',

    'fc1oZCE0',

    'UgffRkOn',

    '7ugX7bm0',

    '9CQBGUeJ',

    '2FQZT3uC',

    'dziNz78I',

    'mdSGyQCJ',

    'LjcVpmDL',

    'fPXNHpm1',

    'HTTbwRmM',

    'B5yTkMQi',

    '8N0FThqG',

    'xys2FYzn',

    'MDzcM9ZK',

    'PARTY',

    '2FQZT3uC',

    'dziNz78I',

    'mdSGyQCJ',

    'LjcVpmDL',

    'fPXNHpm1',

    'HTTbwRmM',

    'B5yTkMQi',

    '8N0FThqG',

    'm8rfQBvl',

    'fc1oZCE0',

    'UgffRkOn',

    '7ugX7bm0',

    '9CQBGUeJ'

]);