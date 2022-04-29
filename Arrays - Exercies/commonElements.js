function common(array1, array2) {
    let intersection = array1.filter(element => array2.includes(element));
    console.log(intersection.join("\n"))
}
common(['he', 2, 3, 4, 5, 6, 8],['he', 2, 53, 33, 83])