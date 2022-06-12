function matchFullName(input){

    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let names = [];
    let validName = null;
    
    while((validName = regex.exec(input)) !== null){
        names.push(validName[0]);
    }

    console.log(names.join(' '));
}
matchName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov")