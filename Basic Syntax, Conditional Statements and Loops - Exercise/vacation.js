function vacation(count, type, day) {
    let price = 0;
    if (type === "Students") {
        switch (day) {
            case "Friday": price = count * 8.45; break;
            case "Saturday": price = count * 9.80; break;
            case "Sunday": price = count * 10.46; break;
        } if(count >= 30){
            price = price * 0.85;
        }
    } else if (type === "Business") {
        if(count >= 100){
            count = count - 10;
        }
        switch (day) {
            case "Friday": price = count * 10.90; break;
            case "Saturday": price = count * 15.60; break;
            case "Sunday": price = count * 16; break;
        } 
    } else if (type === "Regular") {
        switch (day) {
            case "Friday": price = count * 15; break;
            case "Saturday": price = count * 20; break;
            case "Sunday": price = count * 22.50; break;
        } if(count >= 10 && count <= 20){
            price = price * 0.95;
        }
    }console.log(`Total price: ${price.toFixed(2)}`);
}