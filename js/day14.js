let fname = document.getElementById("fname").value;

function greet() {
    let greetParagraph = document.getElementById("greet")
    greetParagraph.style.color = "green"
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;
    greetParagraph.innerHTML = "greetings " + age + " year old " + fname + " " + lname;
}

function trivia1() {
    let triviaAnswer= document.getElementById("trivia1-answer");

    //get values from form
    let chocolateselected = document.getElementById("chocolate").checked;
    let tunaselected = document.getElementById("tuna").checked;
    let honeyselected = document.getElementById("honey").checked;

    // give result based off of what they selected
    if (chocolateselected) {
        triviaAnswer.innerHTML = fname + ", u suck L"
    }
    else if (tunaselected) {
        triviaAnswer.innerHTML = fname + ", u suck L"
    }
    else if (honeyselected) {
        triviaAnswer.innerHTML = fname + ", ur right"
    }
}