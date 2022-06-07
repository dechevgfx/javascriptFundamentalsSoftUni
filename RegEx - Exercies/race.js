function racers(array) {

    let recers = array
        .shift()
        .split(', ');

    let results = {};

    array.forEach((line) => {
        let nameRegEx = /[A-Za-z]/gm;
        let distanceRegEx = /[\d]/gm;

        let name = line
            .match(nameRegEx)
            .join('');

        if (recers.includes(name)) {
            let distance = line
                .match(distanceRegEx)
                .reduce((a, b) => +a + +b);

            if (!results[name]) {
                results[name] = 0;
            }

            results[name] += distance;
        }
    });

    let bestResults = Object.keys(results)
        .sort((a, b) => results[b] - results[a])
        .slice(0, 3)
        .forEach((racer, i) => {

            let p = '';

            switch (i) {
                case 0:
                    p = 'st';
                    break;
                case 1:
                    p = 'nd';
                    break;
                case 2:
                    p = 'rd';
                    break;
            }

            console.log(`${i + 1}${p} place: ${racer}`);
        });
}

racers([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);