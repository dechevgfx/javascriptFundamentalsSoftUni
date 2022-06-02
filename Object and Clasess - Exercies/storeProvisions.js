function stock(currentProvisions, delivery) {

    let stockProvisions = {};

    for (let index = 0; index < currentProvisions.length; index += 2) {
        let product = currentProvisions[index];
        stockProvisions[product] = Number(currentProvisions[index + 1]);
    }

    for (let index = 0; index < delivery.length; index += 2) {
        let product = delivery[index];

        if (!stockProvisions.hasOwnProperty(product)) {
            stockProvisions[product] = 0;
        }
        stockProvisions[product] += Number(delivery[index + 1]);
    }

    for (const key in stockProvisions) {
        console.log(`${key} -> ${stockProvisions[key]}`);
    }
}
stock([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])