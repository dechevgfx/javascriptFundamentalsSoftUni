function round(num1, prec){
    let ourNum = num1;
    let precision = prec;

    if(precision > 15){
        precision = 15;
    }
    let result = ourNum.toFixed(precision);
    console.log(parseFloat(result));
}