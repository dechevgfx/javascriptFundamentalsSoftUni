function phone(array) {
    let names = [];
    let phones = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let splitted = element.split(" ");
        let name = splitted[0];
        let number = splitted[1];

        if (names.includes(name)) {
            let index = names.indexOf(name);
            phones[index] = number;
        }else {
            names.push(name);
            phones.push(number);
        }
    }
    for (let index = 0; index < names.length; index++) {
        console.log(`${names[index]} -> ${phones[index]}`);
    }
}
phone(['tim 09999999', 'petar 132423534534', 'ivo dfsgdgsfsefsg', 'tim 24233242343333333333333']);