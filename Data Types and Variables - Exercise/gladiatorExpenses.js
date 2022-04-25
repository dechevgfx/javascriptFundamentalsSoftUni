function gladiator(loses, helmetPrice, swordPrice, shieldPrice, armourPrice){
    let totalExpenses = 0;

    for (let currentFight = 1; currentFight <= loses; currentFight++){
        if (currentFight % 2 === 0){
            totalExpenses += helmetPrice;
        }
        if (currentFight % 3 === 0){
            totalExpenses += swordPrice;

        }
        if (currentFight % 6 === 0){
            totalExpenses += shieldPrice;
        }
        if (currentFight % 12 === 0){
            totalExpenses += armourPrice
        }

    }
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`)

}