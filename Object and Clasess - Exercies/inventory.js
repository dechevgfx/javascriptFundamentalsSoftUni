function inventar(array) {
    let heroes = [];
    for (let hero of array) {
        let [heroName, heroLevel, items] = hero.split(" / ");

        let singleHero = {
            Hero: heroName,
            level: Number(heroLevel),
            Items: items
        };
        heroes.push(singleHero);
    }
    let sorted = heroes.sort((a, b) => a.level - b.level);


    sorted.forEach(hero => {
        console.log(`Hero: ${hero.Hero}\nlevel => ${hero.level}\nitems => ${hero.Items}`);
    })
}


inventar([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])