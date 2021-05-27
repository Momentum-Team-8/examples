console.log('Try, Catch and Finally example')

document.getElementById('submit').addEventListener('click', () => {
    // event.preventDefault();

    let message;
    let demoInput;

    message = document.getElementById('message');
    message.innerHTML = "";
    demoInput = document.getElementById("demo").value;

    try {
        if(demoInput === "") throw "empty"
        if(isNaN(demoInput)) throw "not a number"
        demoInput = parseInt(demoInput);
        if (demoInput < 5) throw "too low"
        if(demoInput > 10) throw "too high"
    } catch(err) {
        message.innerHTML = "Input is " + err;
    }
})