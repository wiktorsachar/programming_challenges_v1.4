const computersWeapon = ['rock', 'paper', 'scissors'];
const computersChoice = computersWeapon[Math.floor(Math.random()*3)];

let playersChoice = process.argv[2];

setTimeout(function(){
    console.log(`You choose a ${playersChoice}.`);
}, 1000);

setTimeout(function(){
    console.log(`The computer chose a ${computersChoice}.`)
}, 2000);

setTimeout(function() {
    if (playersChoice === 'rock' && computersChoice === 'scissors') {
        console.log('Player wins!');
    } else if (playersChoice === 'rock' && computersChoice === 'paper') {
        console.log('Computer wins!');
    } else if (playersChoice === 'rock' && computersChoice === 'rock') {
        console.log('Draw!');
    } else if (playersChoice === 'paper' && computersChoice === 'rock') {
        console.log('Player wins!');
    } else if (playersChoice === 'paper' && computersChoice === 'scissors') {
        console.log('Computer wins!');
    } else if (playersChoice === 'paper' && computersChoice === 'paper') {
        console.log('Draw!');
    } else if (playersChoice === 'scissors' && computersChoice === 'paper') {
        console.log('Player wins!');
    } else if (playersChoice === 'scissors' && computersChoice === 'rock') {
        console.log('Computer wins!');
    } else if (playersChoice === 'scissors' && computersChoice === 'scissors') {
        console.log('Draw!');
    } else {
        console.log('You have to choose: rock, paper or scissors!');
    }

}, 3000);
