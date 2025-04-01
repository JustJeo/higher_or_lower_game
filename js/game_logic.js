function startGameLogic() {
    console.log("Game Logic Starts")

    // PLAYER CLICKS "START GAME" BTN
    const startGame = document.getElementById("start_game_btn")
    startGame.addEventListener("click", () => {
        document.getElementById("start_game_btn").style.display = "none";
        document.getElementById("game_play_container").style.display = "block";
    });
};