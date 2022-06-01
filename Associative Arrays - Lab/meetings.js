function meet(array) {
    let days = [];
    let people = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let splitted = element.split(" ");
        let day = splitted[0];
        let person = splitted[1];

        if (days.includes(day)) {
            console.log(`Conflict on ${day}!`)
        } else {
            days.push(day);
            people.push(person);
            console.log(`Scheduled for ${day}`)
        }
    }
    for (let index = 0; index < days.length; index++) {
        console.log(`${days[index]} -> ${people[index]}`);
    }
}