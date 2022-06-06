function extract(string) {
let array = string.split('\\').pop();
let splitted = array.split(".");
let format = splitted.pop();
let name = splitted.join(".");
console.log(`File name: ${name}`);
console.log(`File extension: ${format}`);
}
extract('C:\\Internal\\training-internal\\Template.pptx' )