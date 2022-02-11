

const thankYouNames = ['Guadalupe', 'Ollie', 'Aki'];

const occasion = ["surprise"]

const cards = []

function writeCards(thankYouNames, occasion) {
    for (let i = 0; i < thankYouNames.length; i++) {
        cards.push(`Thank you, ${thankYouNames[i]}, for the wonderful ${occasion} gift!`);
        debugger; 
    }
    
    return cards;
}
    
const number = 4
function countDown(number) { 
    while (number >= 0) {
        console.log(number);
        number--;
    }
    return number 

}
