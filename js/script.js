let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

function checkGuess() {
    attempts -= 1;
    const inputElement = document.getElementById("guess");
    const feedbackElement = document.getElementById("feedback");
    let guess = Number(inputElement.value);
    while (attempts > 0) {
        console.log(randomNumber);
        if (guess === randomNumber) {
            attempts = 0;
            feedbackElement.innerHTML =
                "Congratulations! You guessed the number!";
            feedbackElement.style.color = "green";
            break;
        } else if (guess < randomNumber) {
            feedbackElement.innerHTML =
                "Too low! Try again. Attempts: " + `${attempts}`;
            feedbackElement.style.color = "red";
            break;
        } else {
            feedbackElement.innerHTML =
                "Too high! Try again. Attempts: " + `${attempts}`;
            feedbackElement.style.color = "red";
            break;
        }
    }
    if (attempts === 0 && guess !== randomNumber) {
        feedbackElement.innerHTML = "Game over";
        feedbackElement.style.color = "red";
    }
}
