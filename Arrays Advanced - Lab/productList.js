function products(arr) {
    let sorted = arr.sort()
    for (let i = 0; i <= arr.length - 1; i++) {
        console.log(`${i + 1}.${sorted[i]}`)
    }
}
products(["Potatoes", "Tomatoes", "Onions", "Apples"])