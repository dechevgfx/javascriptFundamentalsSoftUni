function digitNumber(digitAsString) {
    let digitAsNumber = Number;
    switch(digitAsString){
        case "zero": digitAsNumber = 0;break
        case "one": digitAsNumber = 1;break
        case "two": digitAsNumber = 2;break
        case "three": digitAsNumber = 3;break
        case "four": digitAsNumber = 4;break
        case "five": digitAsNumber = 5;break
        case "six": digitAsNumber = 6;break
        case "seven": digitAsNumber = 7;break
        case "eight": digitAsNumber = 8;break
        case "nine": digitAsNumber = 9;break
    }
    console.log(digitAsNumber)
}
digitNumber("four")