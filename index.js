const form = document.querySelector('form');
const ul = document.querySelector('.todoList');
const errorMessageField = document.querySelector('p.error');
// Create a variable that will contain all of the 'li' elements 
let todoListElements = [];


// Create an event listener for when the user inputs text and submits
form.addEventListener('submit', updateTodoList);

// Create an event listener to reset the errorMessageField when the user clicks inside of the input field
form.todoText.addEventListener('focus', removeErrorText);

// Write a function that will create an 'li' element for each user todo submission
function updateTodoList(event) {
    event.preventDefault();
    
    // Create 'li' element 
    const li = document.createElement('li');

    // Update the text for the 'li' element to be the same as the user todo submission text
    li.innerText = event.target.todoText.value;

    // Check to see if the input is empty and call printError() if it is empty, otherwise append the 'li' element to the 'ul' element
    if (!li.innerText) {
        printError();
    } else {
        ul.append(li);
        todoListElements = document.querySelectorAll('li');
    }
    
    // Loop through each 'li' element and add an event listener for each element
    todoListElements.forEach(todoLi => {
        todoLi.addEventListener('click', strikeThrough);

    });
    
    // Reset the input field  and/or the errorMessageField after the user submits
    form.reset();
}

// Write a function that will display your error message when the input field is left blank
function printError() {
    // Write error message and make it the text for the 'p.error' element
    errorMessageField.innerText = 'Error: Todo field must not be empty!';
    
}

// Write a function to remove the errorMessageField text
function removeErrorText() {
    errorMessageField.innerText = '';
}


// Write a function that will change the text-decoration of the clicked 'li' element to line-through
function strikeThrough(event) {

   if (event.target.style.textDecoration !== 'line-through') {
    event.target.style.textDecoration = 'line-through';
   } else {
    event.target.style.textDecoration = 'none';
   }
}