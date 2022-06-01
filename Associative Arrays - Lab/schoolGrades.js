function grade(array) {
    let names = [];
    let grades = [];
    let avgGrades = [];
    let result = [];
    let sum = 0;

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let splitted = element.split(" ");
        let name = splitted[0];
        let personGrades = [];
        for (let index = 1; index < splitted.length; index++) {
            const element = splitted[index];
            personGrades.push(element);
        }
        if (names.includes(name)) {
            let indexOfItem = names.indexOf(name);
            grades[indexOfItem].push(...personGrades);
        } else {
            names.push(name);
            grades.push(personGrades);
        }
    }
    for (let index = 0; index < names.length; index++) {
        let outerElement = grades[index];

        for (let index = 0; index < outerElement.length; index++) {
            const element = outerElement[index];
            sum += Number(element);
        }
        let res = (sum / outerElement.length).toFixed(2);
        avgGrades.push(res);
        sum = 0;
    }

    for (let index = 0; index < names.length; index++) {
        result.push(`${names[index]}: ${avgGrades[index]}`)
    }

    console.log(result.sort().join("\n"));
}
grade(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);