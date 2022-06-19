// function lastDigit(input) {
//     let digit = Number(input[0]);
//     let lastDigit1Str = String(digit).slice(-1);
//     let lastDigit1Num = Number(lastDigit1Str);

//     if (digit.length === 1) {
//         if (lastDigit1Num == 0) {
//             console.log('zero')
//         } else if (lastDigit1Num == 1) {
//             console.log('one')
//         } else if (lastDigit1Num == 2) {
//             console.log('two')
//         } else if (lastDigit1Num == 3) {
//             console.log('three')
//         } else if (lastDigit1Num == 4) {
//             console.log('four')
//         } else if (lastDigit1Num == 5) {
//             console.log('five')
//         } else if (lastDigit1Num == 6) {
//             console.log('six')
//         } else if (lastDigit1Num == 7) {
//             console.log('seven')
//         } else if (lastDigit1Num == 8) {
//             console.log('eight')
//         } else if (lastDigit1Num == 9) {
//             console.log('nine')
//         }

//     } else {
//         if (lastDigit1Num == 0) {
//             console.log('zero')
//         } else if (lastDigit1Num == 1) {
//             console.log('one')
//         } else if (lastDigit1Num == 2) {
//             console.log('two')
//         } else if (lastDigit1Num == 3) {
//             console.log('three')
//         } else if (lastDigit1Num == 4) {
//             console.log('four')
//         } else if (lastDigit1Num == 5) {
//             console.log('five')
//         } else if (lastDigit1Num == 6) {
//             console.log('six')
//         } else if (lastDigit1Num == 7) {
//             console.log('seven')
//         } else if (lastDigit1Num == 8) {
//             console.log('eight')
//         } else if (lastDigit1Num == 9) {
//             console.log('nine')
//         }
//     }
// }
// lastDigit(['742'])





function lastDigit(array) {
    let digitsStr = array[0];
    let digitArr = digitsStr.split("");
    let lastDigit = digitArr[digitArr.length - 1];

        if (lastDigit == 0) {
            console.log('zero')
        } else if (lastDigit == 1) {
            console.log('one')
        } else if (lastDigit == 2) {
            console.log('two')
        } else if (lastDigit == 3) {
            console.log('three')
        } else if (lastDigit == 4) {
            console.log('four')
        } else if (lastDigit == 5) {
            console.log('five')
        } else if (lastDigit == 6) {
            console.log('six')
        } else if (lastDigit == 7) {
            console.log('seven')
        } else if (lastDigit == 8) {
            console.log('eight')
        } else if (lastDigit == 9) {
            console.log('nine')
        }
    }
    lastDigit(['742'])