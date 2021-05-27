/* globals fetch, moment */

const url = 'http://localhost:3000/todos'
const form = document.querySelector('#todo-form')
const todoList = document.querySelector('#todo-list')

/* Event listeners */

// Here I am having my form element listen for a submit event
// Once that event is triggered it will render my newly created
// todo item on the DOM
form.addEventListener('submit', event => {
    event.preventDefault()
    const todoText = document.getElementById('todo-text').value
    createTodo(todoText)
})

// Here I am removing a todo item from the DOM
todoList.addEventListener('click', event => {
    // if my user clicks on an element with the class name of
    // delete, then I wan to run deleteTodo()
    if (event.target.classList.contains('delete')) {
        deleteTodo(event.target)
    }
})

/* CRUD functions */


function listTodos() {
    // I am making a GET request to localhost:3000/todos
    fetch(url)
    // My first promise is returning the response from my request in JSON format
    .then((response) => response.json())
    // Now I am extrapolating the data that I need from the response object
    // in the second response
    .then((data) => {
        // here is where I am going to loop through my array
        // of todo objects. 
        for (let todo of data) {
            console.log(todo)
            renderTodoItem(todo)
        }
    })
}


function createTodo(todoText) {
    // I am making a POST request so that I can add
    // a new todo to my database. 
    fetch(url, {
        // I need to send some extra information with this request
        // specifically i am sending the value of my input on the DOM
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            title: todoText,
            body: todoText,
            // here I am creating a new key and using moment().format()
            // to create a time string that captures when the new todo was created
            create_at: moment().format()
        })
    })
    .then(response => response.json())
    .then(data => renderTodoItem(data))
}

function deleteTodo(element) {
    // I need to find the todo item that I want to remove from the DOM
    // and delete from the database by grabbing on to the todo's id
    const todoId = element.parentElement.id
    // This request url is slightly different than your GET request url
    // I am taking my base url localhost:3000/notes and adding
    // /${todoId} where todoId equals the id of todoId element
    fetch(url + "/" + `${todoId}`, {
        // I need to send some information with this request
        // I am telling the API that the request method is DELETE
        method: 'DELETE'
        // here is where I am moving the todo from the DOM
        // so we don't see it on our page anymore
    }).then(() => element.parentElement.remove())
}

function updateTodo(element) {
    const todoId = element.parentElement.id
    fetch(url + "/" + `${todoId}`, {
        // what do you need to send with your request in order to edit an item?
    })
}

/* DOM manipulation */

// This function will handle grabing my list of todos
// and rendering them to the page with DOM manipulation
function renderTodoItem(todoObj) {
 const itemEl = document.createElement('li')
 itemEl.id = todoObj.id
 itemEl.classList.add(
// These strings are TACHYONS class names
'lh-copy',
 'pv3',
 'ba',
 'bl-0',
 'bt-0',
 'br-0',
 'b--dotted',
 'b--black-3')   

 renderTodoText(itemEl, todoObj)
 console.log(itemEl)
 todoList.appendChild(itemEl)
}

// This function is taking two arguments: a todo <li> a todo object.
function renderTodoText(todoListItem, todoObj) {
    // Here I am setting the content of my <li> to the body of my todo object
    todoListItem.innerHTML = `<span class="dib w-60">${todoObj.body}</sp><i class="ml2 dark-red fas fa-times delete"></i><i class="ml3 fas fa-edit edit"></i>`
}

// I have to make sure that I call this function
// so that I will actually see my todos show up 
// on the browser page
listTodos();