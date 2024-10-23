let fname = document.getElementById("fname").value;

function greet() {
    let greetParagraph = document.getElementById("greet")
    greetParagraph.style.color = "green"
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;
    greetParagraph.innerHTML = "greetings " + age + " year old " + fname + " " + lname;
}

function trivia1() {
    let LieAnswer= document.getElementById("ttl-answer");

    //get values from form
    let truth1selected = document.getElementById("truth1").checked;
    let lieselected = document.getElementById("lie").checked;
    let truth2selected = document.getElementById("truth2").checked;

    // give result based off of what they selected
    if (truth1selected) {
        LieAnswer.innerHTML = "Incorrect, I am certified up to 60 feet deep."
    }
    else if (lieselected) {
        LieAnswer.innerHTML = "Correct! I have never been stung by a jellyfish, however, I have gotten close."
    }
    else if (truth2selected) {
        LieAnswer.innerHTML = "Incorrect, I have been to 33 states, including most of the northern, eastern, and western states."
    }
}