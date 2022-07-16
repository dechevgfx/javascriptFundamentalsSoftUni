function game(array) {

    let cryptoCode = array.shift();
    array.pop();
  
    for (let lines of array) {
      let splitted = lines.split('|');
      let command = splitted[0];
  
      if (command === 'ChangeAll') {        
        let subString = splitted[1];
        let replacement = splitted[2];
        for (let char of cryptoCode) {
            if (char == subString) {
                cryptoCode = cryptoCode.replace(subString, replacement)
            }
        }

  
      } else if (command === 'Insert') {
        let index = splitted[1];
        let value = splitted[2];
        let beforeNewElement = cryptoCode.substring(0, index);
        let afterNewElement = cryptoCode.substring(index);
        cryptoCode = `${beforeNewElement}${value}${afterNewElement}`;
  
      } else if (command === 'Move') {
        let moveingElements = cryptoCode.slice(0, splitted[1]);
        let remainingElements = cryptoCode.slice(splitted[1]);
        cryptoCode = remainingElements + moveingElements;
      }
    }
    console.log(`The decrypted message is: ${cryptoCode}`);
  
  }
game(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode'])
