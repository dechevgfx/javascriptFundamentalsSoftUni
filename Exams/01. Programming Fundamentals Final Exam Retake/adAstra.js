function astra(array) {
    let stringForRegEx = array.shift();
    let foodInfoArray = [];
    let regExBlanc = /([|#])(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g
    let totalCalories = 0
    let match = regExBlanc.exec(stringForRegEx);
    while (match) {
        foodInfoArray.push({ name: match[2], date: match[3], calories: match[4] });
        totalCalories += Number(match[4])
        match = regExBlanc.exec(stringForRegEx);
    }
    console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`);
    for (let index = 0; index < foodInfoArray.length; index++) {
        console.log(`Item: ${foodInfoArray[index].name}, Best before: ${foodInfoArray[index].date}, Nutrition: ${foodInfoArray[index].calories}`);
    }
  }
  
  astra([ 

    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|' 
    
    ] )