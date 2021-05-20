// console.log("hello world!");

// this is a javascript arrow function
// () => {}

// the arrow function is the same as this..
// function (){}

// grab the form element from the DOM and put it in a variable
const form = document.querySelector("#login-form");
// grab the email input element from the DOM and put it in a variable
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector('#password-input')


// Set up a boolean to check the validity of form input
let formIsValid;

form.addEventListener('input', event => {
    // console.log('user input captured!')
})

form.addEventListener('submit', event => {
    event.preventDefault()
    validateEmailInput();
    validatePasswordInput();

    if (formIsValid) {
        // make the input label and border of the input green by adding input-valid on the parent div
        document.querySelector(".email-input").classList.add('input-valid')
    }
    // console.log('content inside email input', emailInput.value)
})

function validateEmailInput() {
    // if there isn't any content in the email input then...
    if (emailInput.value === "") {
        const error = document.createElement('div')
        // console.log('The input is empty');

        // make the input label and border of the input red by adding input-valid on the parent div
        document.querySelector(".email-input").classList.add('input-invalid')
        // add an error message to the bottom of the input
        document.querySelector('.email-input').appendChild(error).innerHTML = 'This field is required.'
    } else {
        formIsValid = true
    }
}

function validatePasswordInput() {
    // regular expression to check for at least 8 characters, one letter and one number
    const regex = new RegExp("/^(?=.*\d).{8,}$/")
    const error = document.createElement('div')

    if (passwordInput.value === "") {
        document.querySelector('.password-input').classList.add('invalid-input')
        document.querySelector('.password-input').appendChild(error).innerHTML = 'This field is required'
    } else if (!regex.test(passwordInput.value)) {
        console.log('false');
        document.querySelector('.password-input').classList.add('invalid-input')
        document.querySelector('.password-input').appendChild(error).innerHTML = 'Password must be 8 characters long with one number'
    } else {
        formIsValid = true
    }
}
