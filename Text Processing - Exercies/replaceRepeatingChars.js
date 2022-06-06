function replace(string) {
    let array = string.split("");
    let finalResult = [];
for (let index = 0; index < array.length; index++) {
        if(array[index] !== array[index+1]){
            finalResult.push(array[index]);
        }
}
console.log(finalResult.join(""));
}
replace("aaaaazzzzzzSSSSUUUUMMMMMgggggggoooo")