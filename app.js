//let title = document.querySelector('h1');
//title.innerHTML = 'Secret Number Game';
//let paragraph = document.querySelector('p');
//paragraph.innerHTML = 'Type a number between 1 and 10';
let sortedNumberList = [];
let maxNumber = 10;
let secretNumber = randomNumber();
let attempt = 1;

function showText(tag, text){
    let field = document.querySelector(tag);
    field.innerHTML = text;
    responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate:1.2} );
}
function menuMessage(){
    showText('h1', 'Secret Number Game');
    showText('p','Type a number betwenn 1 and 10');
}
menuMessage();
function verifyGuess() {
    let guess = document.querySelector('input').value;
    //console.log(guess == randomNumber);

    if(guess == secretNumber){
        showText('h1', 'You Won!');
        let worldAttemp = attempt > 1 ? "attempt's" : "attempt";
        let messagesAttempt = `You discovered the secret number with ${attempt} ${worldAttemp}!`;
        showText('p', messagesAttempt);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if(guess > secretNumber){
        showText('h1', 'You lose!');
        showText('p', 'The secret number is minor! ');
    } else{
        showText('h1','You lose!');
        showText('p','The secret number is bigger!');
    }
    attempt++;
    cleanField();
}
function cleanField() {
    guess = document.querySelector('input');
    guess.value = '';
}
function randomNumber() {
    let chosenNumber = parseInt(Math.random() * maxNumber) + 1;
    let elementsOnList = sortedNumberList.length;

    if(elementsOnList == maxNumber){
        sortedNumberList = [];
    }

    if(sortedNumberList.includes(chosenNumber)){
        return randomNumber();
    } else{
        sortedNumberList.push(chosenNumber);
        console.log(sortedNumberList);
        return chosenNumber;
    }
}
function resetGame(){
    secretNumber = randomNumber();
    cleanField();
    attempt = 1;
    menuMessage();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}