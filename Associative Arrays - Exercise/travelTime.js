function travel(array) {
    let countries = {};
    for (let row of array) {
        let [ country, city, price ] = row.split(" > ");

        if (!countries.hasOwnProperty(country)) {
            countries[country] = {};
        }
        if (!countries[country].hasOwnProperty(city)) {
            countries[country][city] = price
        }
        if (countries[country][city] > price) {
            countries[country][city] = price;
        }

    }
let keys = Object.keys(countries);
keys.sort((a, b) => a.localeCompare(b));

for (let item of keys) {
    let sortCity = Object.entries(countries[item]);
    sortCity.sort((a, b) => a[1] - b[1]);
    let result = [];
    for (let city of sortCity) {
        result.push(city.join(" -> "));
    }
    console.log(`${item} -> ${result.join(" ")}`);
}
}
travel([ 

    "Bulgaria > Sofia > 500", 
    
    "Bulgaria > Sopot > 800", 
    
    "France > Paris > 2000", 
    
    "Albania > Tirana > 1000", 
    
    "Bulgaria > Sofia > 200" 
    
    ] );

    console.log("---------")
travel([ 

    'Bulgaria > Sofia > 25000', 
    
    'Bulgaria > Sofia > 25000', 
    
    'Kalimdor > Orgrimar > 25000', 
    
    'Albania > Tirana > 25000', 
    
    'Bulgaria > Varna > 25010', 
    
    'Bulgaria > Lukovit > 10' 
    
    ] );