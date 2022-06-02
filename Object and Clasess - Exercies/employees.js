function emploee(array){

    for(let index = 0; index < array.length; index++){
        let name = array[index];
        let person = { name };
        let elements = Object.entries(person);
            for(let nameAndLength of elements){
            console.log(`Name: ${nameAndLength[1]} -- Personal Number: ${nameAndLength[1].length}`);
            }
    }
}
emploee([ 
    'Silas Butler', 
    'Adnaan Buckley', 
    'Juan Peterson', 
    'Brendan Villarreal' 
    ] )