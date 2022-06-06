function modernHash(string) {
  let result = []

  for (const element of string.split(' ')) {
    if (element[0] === '#' && element.length !== 1) {
      result.push(element.substring(1))
    }
  }
  let finalResult = []
  for (let elements of result) {
    let array = elements.split('');
    let len = array.length;
    let flag = true;

    for (let index = 0; index < len; index++) {
      let code = array[index].charCodeAt(0)

      if ((code < 97 || code > 122) && (code < 65 || code > 90)) {
        flag = false;
      }
    }
    if (flag) {
      finalResult.push(elements)
    }
  }
  console.log(finalResult.join('\n'))
}
modernHash('Nowadays everyone uses # to tag a #special word in #socialMedia')
