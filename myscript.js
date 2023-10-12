
    const statement = document.getElementById("statement");
    const optionButtons = document.querySelector("#options").children;
    const explanation = document.getElementById("explanation");


    var facts = [{statement: "Line 3 Scarborough is the most recent line created at TTC", answer: false, explanation:"Line 4 Sheppard is actually the most recent line which opened in 2002!" }, {statement: "TTC Orion V is still in operation", answer: false, explanation:"Orion V has retired December 2015." }, {statement: "TTC is the largest transit system in North America", answer: false, explanation:"TTC is actually the 3rd largest in North America!" }];
   

    function disable(button) {
        button.setAttribute("disabled", "");
    }

    function enable(button) {
        button.removeAttribute("disabled");
    }

    function isCorrect(guess) {
        return guess === fact.answer;
    }
    

        const next = document.querySelector("#next").children[0]; // Next Button
            let i = 0; // Start With i
            disable(next); // Disable Next Button
            statement.textContent = facts[i].statement; // Set the text content to the statement
            let correctScore = 0;
            for (let myButtons of optionButtons) { // Loop through the option buttons in myButtons
                myButtons.addEventListener("click", (event) => {
                    explanation.innerHTML = facts[i].explanation;
                    if (i != facts.length - 1) {
                    enable(next);
                    }
                    else {
                        next.innerHTML ="No more questions!";
                    }
                    for (let otherButtons of optionButtons) {
                        disable(otherButtons);
                    }
                    if (myButtons.textContent == facts[i].answer.toString()) {
                        myButtons.classList.add("correct");
                        correctScore++;
                    }
                    else {
                        myButtons.classList.add("incorrect");
                    }
                    i++;

                });
                next.addEventListener("click", (event) => {
                    if (i != facts.length) {
                    enable(myButtons);
                    myButtons.classList.remove("correct");
                    myButtons.classList.remove("incorrect");
                    explanation.innerHTML = "";
                    statement.textContent = facts[i].statement;
                    disable(next);
                    document.getElementById("score").innerHTML = "Score: " + correctScore + " / " + i;
                    }

                });
            }
            
    
    
      