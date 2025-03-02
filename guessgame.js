let randomNum;
let maxNumber;
let attempts = 0;

function startGame() {
    const maxInput = document.getElementById("maxNum");
    maxNumber = parseInt(maxInput.value);

    if (isNaN(maxNumber) || maxNumber <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    randomNum = Math.floor(Math.random() * maxNumber) + 1;
    attempts = 0;

    document.getElementById("guessNum").disabled = false;
    document.querySelector("button[onclick='checkGuess()']").disabled = false;

    document.getElementById("message").textContent = `Game started! Guess a number between 1 and ${maxNumber}.`;
}

function checkGuess() {
    const guessInput = document.getElementById("guessNum");
    let userGuess = parseInt(guessInput.value);
    attempts++;

    if (isNaN(userGuess)) {
        document.getElementById("message").textContent = "Please enter a valid number!";
        return;
    }

    if (userGuess === randomNum) {
        document.getElementById("message").textContent = `🎉 Correct! The number was ${randomNum}. Attempts: ${attempts}`;
        guessInput.disabled = true;
        document.querySelector("button[onclick='checkGuess()']").disabled = true;
    } else if (userGuess < randomNum) {
        document.getElementById("message").textContent = "Too low! Try again.";
    } else {
        document.getElementById("message").textContent = "Too high! Try again.";
    }
}
