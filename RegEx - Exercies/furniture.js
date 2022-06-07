function furnitures(array) {
  console.log(`Bought furniture:`);
  let total = 0;

  array.forEach((row) => {
    let regEx = />>(?<name>[A-Za-z]+)<<(?<price>[0-9]+[.]?[0-9]*)!(?<qty>[\d]*)/gm

    let result = regEx.exec(row)

    if (result) {
      let { name, price, qty } = result.groups
      price = Number(price)
      qty = Number(qty)
      total += price * qty
      console.log(name)
    }
  })
  console.log(`Total money spend: ${total.toFixed(2)}`)
}
furnitures(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])
