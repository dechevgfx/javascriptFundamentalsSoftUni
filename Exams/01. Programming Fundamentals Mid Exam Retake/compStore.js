//recieve numbers until command == special or regular
//parse the numbers
//check if the number is positive, if not print "Invalid price!" and continue with the next price.
//check if the total price is 0 - print "Invalid order!" else - proceed with next step
//calulate total price before tax
//calc total price after tax
//check the type of customer and if its special reduce 10% from the price after tax

function coputerStore(array) {
    let totalPriceBeforeTax = 0;
    let typeOfClient = array.pop()
    let tax = 0;
    for (let index = 0; index < array.length; index++) {
        const price = array[index];
        if (price >= 0) {
            totalPriceBeforeTax += parseFloat(price);
        } else {
            console.log("Invalid price!")
        }
    }
    tax += (totalPriceBeforeTax * 0.20);
    let afterTax = totalPriceBeforeTax + tax;
    if (totalPriceBeforeTax > 0) {
        if (typeOfClient == 'special') {
            afterTax *= 0.90;
        }

        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${totalPriceBeforeTax.toFixed(2)}$`);
        console.log(`Taxes: ${tax.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${afterTax.toFixed(2)}$`);
    } else if (totalPriceBeforeTax == 0) {
        console.log("Invalid order!")
    }
}

// function computerStore(input) {
//   let priceWithoutTaxes = 0;
//   let taxes = 0;
//   let typeOfClient = input.pop()

//   for (let price of input) {
//     if (price >= 0) {
//       priceWithoutTaxes += parseFloat(price);
//     } else {
//       console.log('Invalid price!');
//     }
//   }
//   taxes += priceWithoutTaxes * 0.2;
//   let priceWithTaxes = priceWithoutTaxes + taxes;
//   if (priceWithoutTaxes > 0) {
//     if (typeOfClient == 'special') {
//       priceWithTaxes *= 0.9;
//     }

//     console.log(`Congratulations you've just bought a new computer!`);
//     console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
//     console.log(`Taxes: ${taxes.toFixed(2)}$`);
//     console.log(`-----------`);
//     console.log(`Total price: ${priceWithTaxes.toFixed(2)}$`);

//   } else if (priceWithoutTaxes == 0) {
//     console.log('Invalid order!')
//   }
// }


// computerStore([
//   '1023',
//   '15',
//   '-20',
//   '-5.50',
//   '450',
//   '20',
//   '17.66',
//   '19.30',
//   'regular',
// ])
// computerStore(['regular'])
