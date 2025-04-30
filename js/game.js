// Fetches separated .html files to inject into index.html
document.addEventListener("DOMContentLoaded", () => {
    Promise.all([
        fetch("sections/html_head.html")
            .then(response => response.text())
            .then(data => document.getElementById("html_head").innerHTML = data),

        fetch("sections/nav.html")
            .then(response => response.text())
            .then(data => document.getElementById("nav").innerHTML = data),

        fetch("content/game.html")
            .then(response => response.text())
            .then(data => document.getElementById("game_content").innerHTML = data),

        fetch("sections/footer.html")
            .then(response => response.text())
            .then(data => document.getElementById("footer").innerHTML = data),

        fetch("sections/js_end_scripts.html")
            .then(response => response.text())
            .then(data => document.getElementById("js_end_scripts").innerHTML = data)
        ])
        .then(() => {
            console.log("All Sections loaded.");

            const playAgain = document.getElementById("play_again_btn");
                playAgain.addEventListener("click", () => {
                // Updates Highscore
                updateHighScore();
                document.getElementById("high_score_text").innerHTML = "High Score = " + highScore;
            });

            setTimeout(gameLogic, 100);
    });
});