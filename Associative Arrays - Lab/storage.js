function storage(array) {
    let products = [];
    let quantities = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let splitted = element.split(" ");
        let product = splitted[0];
        let quantity = splitted[1];

        if (products.includes(product)) {
            let index = products.indexOf(product);
            quantities[index] = Number(quantities[index]) + Number(quantity);
        }else {
            products.push(product);
            quantities.push(quantity);
        }
    }
    for (let index = 0; index < products.length; index++) {
        console.log(`${products[index]} -> ${quantities[index]}`);
    }
}