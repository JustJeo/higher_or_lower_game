// TOGGLE LIGHT MODE FX 
function lightMode() {
    document.body.classList.toggle("light-mode");
};

// TOGGLE LIGHT MODE CARDS FX
function lightModeCards() {
    const lightCards = document.getElementsByClassName("light-mode-card");
    const darkCards = document.getElementsByClassName("dark-mode-card");
    const isLightMode = document.body.classList.contains("light-mode");

    for (let card of lightCards) {
        card.style.display = isLightMode ? "block" : "none";
    }

    for (let card of darkCards) {
        card.style.display = isLightMode ? "none" : "block";
    }
};

// DRAW A CARD
// Chooses a number between 1-10
function drawCard() {
    let randomCard = Math.floor(Math.random() * 10 + 1);
    if (randomCard == 1) {
        document.getElementById("first_card").innerHTML = `<img class="dark-mode-card" src="assets/images/mvp_deck_cards/mvp_card_1_transparent_dark.png" alt="">`;
    } else {
        document.getElementById("first_card").innerHTML = `${randomCard}`;
    }
};

function startGameLogic() {
    console.log("Game Logic Starts")

    // PLAYER CLICKS "START GAME" BTN
    const startGame = document.getElementById("start_game_btn")
    startGame.addEventListener("click", () => {
        document.getElementById("start_game_btn").style.display = "none";
        document.getElementById("game_play_container").style.display = "block";
        drawCard();
    })

    // PLAYER CLICKS ON "LIGHT MODE" TOGGLE BTN
    const lightModeBtn = document.getElementById("light_mode_btn");
    if (lightModeBtn) {
        lightModeBtn.addEventListener("click", () => {
            console.log("Light Mode Button Clicked!"); // Debug log
            lightMode();
            lightModeCards();
        });
    } else {
        console.error("Light mode button not found!"); // Debugging help
    }


};
