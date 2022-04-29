function bugs(arrayOfStrings) {
	let sizeOfTheField = arrayOfStrings.shift();
	let initialBugsPlacesIndecies = arrayOfStrings
		.shift()
		.split(" ")
		.map(Number);
	let finalField = []

	for (let index = 0; index < initialBugsPlacesIndecies.length; index++) {
		finalField.push(0);
	}
	for (let index = 0; index < sizeOfTheField; index++) {
		let filledBugsPlaces = initialBugsPlacesIndecies[index];
		if (filledBugsPlaces >= 0 && filledBugsPlaces < sizeOfTheField) {
			finalField[filledBugsPlaces] = 1;
		}
	}
	for (let index = 2; index < arrayOfStrings.length; index++) {
		let [filledBugsPlaces, command, flyLength] = arrayOfStrings[index].split(" ");
		filledBugsPlaces = +filledBugsPlaces;
		flyLength = +flyLength;

		if (finalField[filledBugsPlaces] !== 1 || filledBugsPlaces < 0 || filledBugsPlaces >= finalField.length) {
			continue;
		}
		if (flyLength < 0) {
			flyLength = Math.abs(flyLength);
			if (command === 'right') {
				command = 'left';
			} else if (command === 'left') {
				command = 'right';
			}
		}
	}
		finalField[filledBugsPlaces] = 0;
		if (command === 'right') {

			let newPosition = filledBugsPlaces + flyLength;
			if (finalField[newPosition] === 1) {
				newPosition = newPosition + flyLength;
			}
			if (newPosition <= finalField.length) {
				finalField[newPosition] = 1;
			}

		} else {

			let newPosition = filledBugsPlaces - flyLength;
			if (finalField[newPosition] === 1) {
				newPosition = newPosition - flyLength;
			}
			if (newPosition >= 0) {
				finalField[newPosition] = 1;
			}
		}


	console.log(finalField.join(' '));

}

bugs([3,
	"0 1",
	"0 right 1",
	"2 right 1",])
bugs([5, '3',
	'3 left 2',
	'1 left -2']
);
