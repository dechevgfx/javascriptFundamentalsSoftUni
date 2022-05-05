function solve(password){

    let isItDigit = (asciiCode) => 48 && asciiCode <= 57;

    let length = hasValidLength();
    let content = hasValidContent();
    let digits = hasAtLeastTwoDigits();

    if(!length){
        console.log(`Password must be between 6 and 10 characters`);
    }

    if(!content){
        console.log(`Password must consist only of letters and digits`);
    }

    if(!digits){
        console.log('Password must have at least 2 digits');
    }

    if(length && content && digits){
        console.log(`Password is valid`);
    }

    function hasValidLength() {
        return password.length >= 6 && password.length <= 10;
    }

    function hasValidContent() {
        let lowercasePass = password.toLowerCase();
        let isLetter = (asciiCode) => 97 && asciiCode <= 122;
        let IsValid = true;

        for(let i = 0; i < lowercasePass.length; i++){
            let asciiCode = lowercasePass.charCodeAt(i);

            if(isLetter(asciiCode) || isItDigit(asciiCode)) {
                continue;
            }
            return false;
        }

        return true;
    }

    function hasAtLeastTwoDigits() {

        let digitsCount = 0;

        for(let i = 0; i < password.length; i++){
            let ascii = password.charCodeAt(i);

            let asciiIsDigit = isItDigit(ascii);

            if(asciiIsDigit){
                digitsCount++;
            }
        }

        return digitsCount >= 2;
    }
}
