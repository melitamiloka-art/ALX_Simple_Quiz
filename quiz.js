function checkAnswer() {
    
    let correctAnswer = "4";

    
    let selectedOption = document.querySelector('input[name="quiz"]:checked');

    
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer first!";
        return;
    }

    let userAnswer = selectedOption.value;

    
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}


document.getElementById("submit-answer").addEventListener("click", checkAnswer);