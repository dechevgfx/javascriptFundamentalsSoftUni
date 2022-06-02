function movie(array) {
    let movies = [];

    for (let element of array) {
        if (element.includes('addMovie')) {

            let name = element
                .split('addMovie ')
                .join("");

            movies.push({ name });

        } else if (element.includes('directedBy')) {

            let [name, director] = element
                .split(' directedBy ');

            let foundName = movies.find((foundNameObj => foundNameObj.name === name));
            if (foundName) {
                foundName.director = director;
            }

        } else if (element.includes('onDate')) {

            let [name, date] = element
                .split(' onDate ');

            let foundName = movies.find((foundNameObj => foundNameObj.name === name));
            if (foundName) {
                foundName.date = date;
            }

        }
    }
    movies.forEach(movie => {
        if (movie.name && movie.date && movie.director) {
            console.log(JSON.stringify(movie))
        }
    })


}
movie([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])