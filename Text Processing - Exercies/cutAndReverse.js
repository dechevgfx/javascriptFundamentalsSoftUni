function cutReverse(string) {
  let len = string.length / 2
  let array = string.split('')
  let firstSen = []
  let secondSen = []
  for (let index = 0; index < len; index++) {
    firstSen.push(array[index])
  }
  for (let index = len; index < array.length; index++) {
    secondSen.push(array[index])
  }
  let sentanceOne = firstSen.reverse().join("");
  let sentanceTwo = secondSen.reverse().join("");

  console.log(`${sentanceOne}\n${sentanceTwo}`)
}

cutReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')