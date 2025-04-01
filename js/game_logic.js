// TOGGLE LIGHT MODE FX 
function lightMode() {
    document.body.classList.toggle("light-mode");
};

// DRAW A CARD
// Chooses a number between 1-10
function drawCard() {
    let randomCard = Math.floor(Math.random() * 10 + 1);
    document.getElementById("first_card").innerHTML = `${randomCard}`;
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

    // LIGHT MODE TOGGLE BTN
    const lightModeBtn = document.getElementById("light_mode_btn");
    if (lightModeBtn) {
        lightModeBtn.addEventListener("click", () => {
            console.log("Light Mode Button Clicked!"); // Debug log
            lightMode();
        });
    } else {
        console.error("Light mode button not found!"); // Debugging help
    }


};
