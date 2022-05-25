function solve(input){

    for(let i = 0; i < input.length; i++){
        let [name, latitude, longitude] = input[i].split(' | ');

        let town = {
            town: name,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }
        console.log(town);
    }
}