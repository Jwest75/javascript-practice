// import my elements
import {button, input, ul} from './elements.js';

const items = [];

// add item fuction to dyamically add items to the list
export function addItem(){
    const li = document.createElement('li');
    const deleteButton =document.createElement('button');
   
    // update elements text
    li.innerHTML = input.value;
    deleteButton.innerHTML = "X"
   // append elements to the DOM
    li.prepend(deleteButton);
    ul.append(li);

    // add event to interact with the delete button
    li.addEventListener('click', deleteButton);


}