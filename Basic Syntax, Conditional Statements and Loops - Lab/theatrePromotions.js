function theatrePromotions(day, age) {
    if (age >= 0 && age <= 122) {
        switch (day) {
            case "Weekday":
                if (age >= 18 && age <= 64) {
                    price = 18;
                    break;
                } else {
                    price = 12;
                    break;
                }
            case "Weekend":
                if (age >= 18 && age <= 64) {
                    price = 20;
                    break;
                } else {
                    price = 15;
                    break;
                }
            case "Holiday":
                if (age <= 18) {
                    price = 5;
                    break;
                } else if (age <= 64) {
                    price = 12;
                    break;
                } else {
                    price = 10;
                    break;
                }

        }
        console.log(`${price}$`)
    } else {
        console.log("Error!");
    }
}