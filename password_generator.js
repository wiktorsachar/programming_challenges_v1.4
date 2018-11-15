function randomPasswordGenerator (numberOfSymbols) {
    const arrayOfSymbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z', 1,2,3,4,5,6,7,8,9,0];
    
    let password = '';
    while (password.length<numberOfSymbols){
        random = Math.floor(Math.random()*arrayOfSymbols.length);
        password = password + (arrayOfSymbols[random]);
    }
    return password;
};

console.log(randomPasswordGenerator(20));