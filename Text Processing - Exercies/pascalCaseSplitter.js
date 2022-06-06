// function splitPascalCase(string) {
// 	let wordRegEx = /($[a-z])|[A-Z][^A-Z]+/g;
// 	console.log(string.match(wordRegEx).join(", "))
// }
// 60/100


function splitPascalCase(string) {
    console.log(string.split(/(?=[A-Z])/).join(", "))
}
splitPascalCase("")
//100/100