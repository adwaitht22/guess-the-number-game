
let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let attemptCount = document.getElementById("attemptCount");

let randomNumber = Math.ceil(Math.random() * 100);
let attempts = 0;

function checkGuess() {
    let guessedNumber = Number(userInput.value);

    if (
        userInput.value.trim() === "" ||
        guessedNumber < 1 ||
        guessedNumber > 100 ||
        !Number.isInteger(guessedNumber)
    ) {
        gameResult.textContent = "Please enter a whole number from 1 to 100.";
        gameResult.style.backgroundColor = "#fef3c7";
        gameResult.style.color = "#92400e";
        return;
    }

    attempts = attempts + 1;
    attemptCount.textContent = attempts;

    if (guessedNumber > randomNumber) {
        gameResult.textContent = "📉 Too high! Try a smaller number.";
        gameResult.style.backgroundColor = "#dbeafe";
        gameResult.style.color = "#1e40af";
    } else if (guessedNumber < randomNumber) {
        gameResult.textContent = "📈 Too low! Try a bigger number.";
        gameResult.style.backgroundColor = "#ffedd5";
        gameResult.style.color = "#9a3412";
    } else {
        gameResult.textContent = "🎉 Correct! You got it in " + attempts + " attempts!";
        gameResult.style.backgroundColor = "#dcfce7";
        gameResult.style.color = "#166534";
    }
}

function resetGame() {
    randomNumber = Math.ceil(Math.random() * 100);
    attempts = 0;

    userInput.value = "";
    attemptCount.textContent = attempts;

    gameResult.textContent = "Good luck! Give it your best shot.";
    gameResult.style.backgroundColor = "#f1f5f9";
    gameResult.style.color = "#475569";
}
