function condense(arr) {
    while (arr.length > 1) {
        let number = Array(arr.length-1);
        for (let i = 0; i < arr.length - 1; i++) {
            number[i] = Number(arr[i]) + Number(arr[i + 1]);
        }
        arr = number;
    }
    console.log(arr[0])
}
condense([5,0,4,1,2])