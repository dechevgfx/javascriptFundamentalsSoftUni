function reversePlace(arr) {
     for (let i = 0; i < arr.length / 2; i++){
         let k = arr.length - 1 - i;
         let temp = arr[i];
         arr[i] = arr[k]
         arr[k] = temp;
        }
        let result = arr.join(" ")
        console.log(result)
}
reversePlace([1,2,3,4,5,66,7,8,9,])