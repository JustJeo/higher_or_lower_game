// ~~~~~~~~~~ Variables ~~~~~~~~~~
let firstCard = null;

// ~~~~~~~~~~ Dark Mode ~~~~~~~~~~
// TOGGLE DARK MODE FX
// Adds or removes class "dark-mode" when btn is clicked.
function darkMode() {
    document.body.classList.toggle("dark-mode");
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

// ~~~~~~~~~~ Cards ~~~~~~~~~~
// DRAW A CARD FX
function drawCard() {
    // Chooses a number between 1-10
    let randomCard = Math.floor(Math.random() * 10 + 1);
    // Displays image corresponding to random number
    document.getElementById("first_card").innerHTML = `<img class="light-mode-card" src="assets/images/mvp_deck_cards/mvp_card_` + randomCard + `_light.png" alt="">
    <img class="dark-mode-card" src="assets/images/mvp_deck_cards/mvp_card_` + randomCard + `_dark.png" alt="">`;
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
        (guess === "lower" && newCard < firstCard)
    ) {
        document.getElementById("text_result").innerHTML = "<h2>You chose correctly.</h2>";
    } else {
        document.getElementById("text_result").innerHTML = "<h2>You chose wrong</h2>";
    }

    // Update firstCard for the next round.
    firstCard = newCard;
};
// Compares card value from first draw [when player hits "start" btn] and the second draw [when player hits either the "higher" or "lower" btn]

// ~~~~~~~~~~ Game Logic ~~~~~~~~~~
// GAME LOGIC STARTS
function startGameLogic() {
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
};
