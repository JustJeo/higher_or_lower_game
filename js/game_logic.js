// ~~~~~~~~~~ Variables ~~~~~~~~~~
let firstCard = null;
let playerStreak = 0;
let highScore = 0;

// ~~~~~~~~~~ Dark Mode ~~~~~~~~~~
// TOGGLE DARK MODE FX
// Adds or removes class "dark-mode" when btn is clicked.
function darkMode() {
    document.body.classList.toggle("dark-mode");
    document.getElementById("game_page").classList.toggle("dark-mode-game");
};

// TOGGLE DARK MODE CARDS FX
// Checks if class "dark-mode" is on
function darkModeCards() {
    const isDarkMode = document.body.classList.contains("dark-mode");
    const lightCards = document.getElementsByClassName("light-mode-card");
    const darkCards = document.getElementsByClassName("dark-mode-card");

    // If "dark-mode" is on, then make darkCards visible
    for (let card of darkCards) {
        card.style.display = isDarkMode ? "initial" : "none";
    }

    // If "light-mode" is on, then make darkCards invisible
    for (let card of lightCards) {
        card.style.display = isDarkMode ? "none" : "initial";
    }
};

// ~~~~~~~~~~ Rules ~~~~~~~~~~
function showRules() {
    document.body.classList.toggle("show-rules");
};

// ~~~~~~~~~~ Cards ~~~~~~~~~~
// DRAW A CARD FX
function drawCard() {
    // Chooses a number between 1-10
    let randomCard = Math.floor(Math.random() * 10 + 1);
    // Displays image corresponding to random number
    document.getElementById("first_card").innerHTML = `<img class="light-mode-card animate__animated animate__flipInY" src="assets/images/mvp_deck_cards/mvp_card_` + randomCard + `_light.png" alt="">
    <img class="dark-mode-card animate__animated animate__flipInY" src="assets/images/mvp_deck_cards/mvp_card_` + randomCard + `_dark.png" alt="">`;
    // Invokes darkModeCards fx to know if cards should be displayed in light mode or dark mode to the player
    darkModeCards();
    // Store card value
    return randomCard;
};

// COMPARE CARDS FX
function compareCards(guess) {
    let newCard = drawCard();

    // Check if newCard === firstCard, if it is then redraw another card for newCard
    while (newCard === firstCard) {
        newCard = drawCard();
    };

    console.log("The first card drawn was a " + firstCard);
    console.log("The second card drawn is a " + newCard);

    // Add logic to guesses
    if (
       (guess === "higher" && newCard > firstCard) ||
       (guess === "lower" && newCard < firstCard)) {
        playerStreak++;
        document.getElementById("text_result").innerHTML = "<h2 class='animate__animated animate__fadeInUp animate__delay-1s'>You chose correctly</h2>";
        document.getElementById("player_streak_text").innerHTML = "<h4 class='animate__animated animate__fadeInUp animate__delay-1s'>Player Streak = " + playerStreak + "</h4>";
    } else {
        document.getElementById("higher_btn").style.display = "none";
        document.getElementById("lower_btn").style.display = "none";
        document.getElementById("text_result").innerHTML = "<h2 class='animate__animated animate__fadeInUp animate__delay-1s'>You chose wrong</h2>";
        document.getElementById("player_streak_text").innerHTML = "<h4 class='animate__animated animate__fadeInUp animate__delay-1s'>Player Streak = " + playerStreak + "</h4>";
        document.getElementById("play_again_btn").style.display = "initial";
    }

    // Update firstCard for the next round.
    firstCard = newCard;
};
// Compares card value from first draw [when player hits "start" btn] and the second draw [when player hits either the "higher" or "lower" btn]

function updateHighScore() {
    if (playerStreak > highScore) {
        highScore = playerStreak;
        return highScore;
    }
};

// ~~~~~~~~~~ Game Logic ~~~~~~~~~~
// GAME LOGIC STARTS
function gameLogic() {
    console.log("Game Logic Starts")

    // PLAYER CLICKS "START GAME" BTN
    const startGame = document.getElementById("start_game_btn");
    startGame.addEventListener("click", () => {
        // Hides "Start" btn
        document.getElementById("start_game_btn").style.display = "none";
        // Shows "Game Play" area
        document.getElementById("game_play_container").style.display = "block";
        firstCard = drawCard();
        // console.log("The first card drawn is: " + firstCard);
    });

    // PLAYER CLICKS ON "DARK MODE" TOGGLE BTN
    const darkModeBtn = document.getElementById("dark_mode_btn");
    if (darkModeBtn) {
        darkModeBtn.addEventListener("click", () => {
            // Fxs to invoke
            darkMode();
            darkModeCards();
        });
    };

    // PLAYER CLICKS "HIGHER" BTN
    const higherBtn = document.getElementById("higher_btn");
    higherBtn.addEventListener("click", () => {
        compareCards("higher");
    });

    // PLAYER CLICKS "LOWER" BTN
    const lowerBtn = document.getElementById("lower_btn");
    lowerBtn.addEventListener("click", () => {
        compareCards("lower");
    });

    // PLAYER CLICKS "PLAY AGAIN" BTN
    const playAgain = document.getElementById("play_again_btn");
    playAgain.addEventListener("click", () => {
        // Hides "Play Again" btn
        document.getElementById("play_again_btn").style.display = "none";
        // Shows "Higher" and "Lower" Btns Again
        document.getElementById("higher_btn").style.display = "initial";
        document.getElementById("lower_btn").style.display = "initial";
        // Reset Elements
        playerStreak = 0;
        document.getElementById("text_result").innerHTML = "";
        document.getElementById("player_streak_text").innerHTML = "";
        firstCard = drawCard();
        // console.log("The first card drawn is: " + firstCard);
    });
};
