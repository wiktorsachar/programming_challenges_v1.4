//name generator - #00, database - dzidziusiowo.pl

function nameGenerator(gender){
    const femaleNames = ['Julia','Zuzanna','Zofia','Lena','Maja','Hanna','Amelia','Alicja','Maria','Aleksandra','Oliwia','Natalia','Wiktoria','Emilia','Antonina','Laura', 'Pola','Iga','Anna','Liliana'];
    const maleNames = ['Antoni','Jakub','Jan','Szymon','Franciszek','Filip','Aleksander','Mikołaj','Wojciech','Kacper','Adam','Michał','Marcel','Stanisław','Wiktor','Piotr','Igor','Leon','Nikodem','Mateusz']
    const secondNames = ['Nowak', 'Wojcik', 'Kowalczyk', 'Wozniak', 'Mazur', 'Krawczyk', 'Kaczmarek','Zajac', 'Krol', 'Wieczorek', 'Wrobel', 'Stepien', 'Dudek', 'Adamczyk', 'Pawlak', 'Walczak', 'Sikora', 'Baran', 'Michalak', 'Szewczyk', 'Bak', 'Duda', 'Wilk', 'Lis', 'Mazurek', 'Sobczak', 'Mroz', 'Szulc', 'Kania', 'Kozak', 'Mucha', 'Kruk']
    let femaleNameRandom = femaleNames[Math.floor(Math.random()*femaleNames.length)];
    let maleNameRandom = maleNames[Math.floor(Math.random()*maleNames.length)];
    let secondNameRandom = secondNames[Math.floor(Math.random()*secondNames.length)];
    let randomer = Math.floor(Math.random()*2);
    
    if (gender === 'f') {
        return femaleNameRandom + ' ' + secondNameRandom;
    } else if (gender === 'm') {
        return maleNameRandom + ' ' + secondNameRandom;
    } else if (randomer === 0) {
        return femaleNameRandom + ' ' + secondNameRandom;
    } else {
        return maleNameRandom + ' ' + secondNameRandom;
    }
};


console.log(nameGenerator(process.argv[2]));
