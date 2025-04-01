// Fetches separated .html files to inject into index.html
document.addEventListener("DOMContentLoaded", () => {
    fetch("sections/html_head.html")
        .then(response => response.text())
        .then(data => document.getElementById("html_head").innerHTML = data);

    fetch("sections/nav.html")
        .then(response => response.text())
        .then(data => document.getElementById("nav").innerHTML = data);

    fetch("content/game.html")
        .then(response => response.text())
        .then(data => {document.getElementById("game_content").innerHTML = data;
            // PLAYER CLICKS "START GAME" BTN
            const startGame = document.getElementById("start_game_btn")
            startGame.addEventListener("click", () => {
                document.getElementById("start_game_btn").style.display = "none";
                document.getElementById("game_play_container").style.display = "block";
            });
        })
        .catch(error => console.error('Error loading game.html:', error));

    fetch("sections/footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer").innerHTML = data);
});

