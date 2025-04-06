// ~~~~~~~~~~ Variables ~~~~~~~~~~
let firstCard = null;

// ~~~~~~~~~~ Light Mode ~~~~~~~~~~
// TOGGLE LIGHT MODE FX
// Adds or removes class "light-mode" when btn is clicked.
function lightMode() {
    document.body.classList.toggle("light-mode");
};

// TOGGLE LIGHT MODE CARDS FX
// Checks if class "light-mode" is on
function lightModeCards() {
    const isLightMode = document.body.classList.contains("light-mode");
    const lightCards = document.getElementsByClassName("light-mode-card");
    const darkCards = document.getElementsByClassName("dark-mode-card");

    // If "light-mode" is on, then make lightCards visible
    for (let card of lightCards) {
        card.style.display = isLightMode ? "initial" : "none";
    }

    // If "light-mode" is on, then make darkCards invisible
    for (let card of darkCards) {
        card.style.display = isLightMode ? "none" : "initial";
    }
};

// ~~~~~~~~~~ Cards ~~~~~~~~~~
// DRAW A CARD FX
// Chooses a number between 1-10
// Store card value in randomCard
function drawCard() {
    let randomCard = Math.floor(Math.random() * 3 + 1);
    if (randomCard == 1) {
        document.getElementById("first_card").innerHTML = `<img class="light-mode-card" src="assets/images/mvp_deck_cards/mvp_card_1_light.png" alt="">
        <img class="dark-mode-card" src="assets/images/mvp_deck_cards/mvp_card_1_dark.png" alt="">`;
    } else if (randomCard == 2) {
        document.getElementById("first_card").innerHTML = `<img class="light-mode-card" src="assets/images/mvp_deck_cards/mvp_card_2_light.png" alt="">
        <img class="dark-mode-card" src="assets/images/mvp_deck_cards/mvp_card_2_dark.png" alt="">`;
    } else if (randomCard == 3) {
        document.getElementById("first_card").innerHTML = `<img class="light-mode-card" src="assets/images/mvp_deck_cards/mvp_card_3_light.png" alt="">
        <img class="dark-mode-card" src="assets/images/mvp_deck_cards/mvp_card_3_dark.png" alt="">`;
    } else {
        document.getElementById("first_card").innerHTML = `${randomCard}`;
    };
    return randomCard;
};

// COMPARE CARDS FX
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
        const currentCard = drawCard();
        console.log("The first card drawn is: " + currentCard);
    });

    // PLAYER CLICKS ON "LIGHT MODE" TOGGLE BTN
    const lightModeBtn = document.getElementById("light_mode_btn");
    if (lightModeBtn) {
        lightModeBtn.addEventListener("click", () => {
            lightMode();
            lightModeCards();
        });
    };

    // PLAYER CLICKS "HIGHER" BTN
    const higherBtn = document.getElementById("higher_btn");
    higherBtn.addEventListener("click", () => {
        const currentCard = drawCard();
        console.log("You chose higher. The next card drawn is: " + currentCard);
    });

    // PLAYER CLICKS "LOWER" BTN
    const lowerBtn = document.getElementById("lower_btn");
    lowerBtn.addEventListener("click", () => {
        const currentCard = drawCard();
        console.log("You chose lower. The next card drawn is: " + currentCard);
    });
};
