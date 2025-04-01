function startGameLogic() {
    console.log("Game Logic Starts")

    // PLAYER CLICKS "START GAME" BTN
    const startGame = document.getElementById("start_game_btn")
    startGame.addEventListener("click", () => {
        document.getElementById("start_game_btn").style.display = "none";
        document.getElementById("game_play_container").style.display = "block";
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

    console.log("Light Mode Button:", document.getElementById("light_mode_btn"));
    console.log("Attaching event listener to light mode button...");
};

// TOGGLE LIGHT MODE FX 
function lightMode() {
    document.body.classList.toggle("light-mode");
};