function occur(stringInput) {

    let words = stringInput
    .toLowerCase()
    .split(" ");

    let map = new Map();
    
    for (let word of words) {
        let num = 0;
        if (map.has(word)) {
            num = map.get(word);
        }
        num++;
        map.set(word, num);
    }
    let entries = Array.from(map);
    let result = entries.filter((el) => {
        return el[1] % 2 !== 0;
    });
    let finalResult = [];
    result.forEach(word => {
        finalResult.push(word[0]);
    });
    console.log(finalResult.join(" "));
}
occur('Java C# Php PHP Java PhP 3 C# 3 1 5 C#' )