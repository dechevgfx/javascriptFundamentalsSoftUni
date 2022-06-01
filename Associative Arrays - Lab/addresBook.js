function addresReg(array) {

    let names = [];
    let addreses = [];
    let finalResultArray = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let splitted = element.split(":");
        let name = splitted[0];
        let addres = splitted[1];

        if (names.includes(name)) {
            let index = names.indexOf(name);
            addreses[index] = addres;
        }else {
            names.push(name);
            addreses.push(addres);
        }
    }
    for (let index = 0; index < names.length; index++) {
        finalResultArray.push(`${names[index]} -> ${addreses[index]}`)
    }
    let result = finalResultArray.sort();
    console.log(result.join("\n"));
}
// addresReg([
//     'Tim:Doe Crossing',
//     'Bill:Nelson Place',
//     'Peter:Carlyle Ave',
//     'Bill:Ornery Rd'
//   ]);
  addresReg([
    'Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'
  ]);
