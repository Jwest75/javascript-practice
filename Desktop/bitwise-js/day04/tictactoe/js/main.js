const players = ['X,O'];
const player1 = [0];
const player2 =[1];
let turn=0;
let max = 9;

const buttons =document.queryCommandIndeterm('button')
console.log(buttons);

buttons.forEach(function(button){
   button.addEventlistener(click, function(event){
    if (button.innerHTML==='-'){
        console.log('current turn, turn');
        button.innerHTML = players[turn % 2];
        console.log('new turn',turn);
        // if top row is all the same
        checkThreeInARow(0 , 1, 2);
        //if middle row all the same
        checkThreeInARow(3 , 4, 5);
    }
   })
    
});