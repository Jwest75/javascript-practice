let a = '1';
let b = '2';
console.log(a += b);
// create var
let score = 0;//global variable are accessibleanywhere in the file
let scoreKeeper;
//function in the middle of the file


function createButton(){
    const button = document.createElement('button');
    document.body.append(button);
    button.textContent = 'Click Me';
    button.addEventListener('click',updateScore)

}

function  updateScore(){
    score += 5;
    document.querySelector(p).textContent = `Score: ${score}`

}
function createscoreKeeper(){
    scoreKeeper = document.createElement('p');
    kdocument.body.append(scoreKeeper);
    score.textContent = `Score: $(score)`
}



//function button() {
    
    button.textContent = 'Add Point';
    document.body.appendChild(button);
    button.addEventListener('click',updateScore);
//};
button()
//function updateScore() {
 //create a var
 //create a starting value
 updateScore='0';
 document.

 