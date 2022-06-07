function bar(array) {
  let totalIncome = 0
  array.pop()
  array.forEach((el) => {
    let regEx = /%(?<name>[A-Z][a-z]+)%[^$%|.]{0,}<(?<product>[\w]+)>[\D^$%|.]{0,}\|(?<count>[0-9]+)\|[\D^$%|.]{0,}(?<price>[0-9]+|[0-9]+\.[0-9]+)\$/g
    let match = regEx.exec(el)
    if (match != null) {
      let currentSum = Number(match.groups.count) * Number(match.groups.price)
      totalIncome += currentSum
      console.log(`${match.groups.name}: ${match.groups.product} - ${currentSum.toFixed(2)}`)
    }
  });
  console.log(`Total income: ${totalIncome.toFixed(2)}`);
};
bar([
  '%InvalidName%<Croissant>|2|10.3$',
  '%Peter%<Gum>|1|1.3$',
  '%Maria%<Cola>|1|2.4',
  'end of shift',
])
