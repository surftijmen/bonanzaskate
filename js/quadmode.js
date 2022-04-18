let allTricks;
let currentTrick;
let achievedTricks = [];
let health = 6;

const generateTricks = function() {
    fetch('../recourses/tricks.txt')
    .then(response => response.text())
    .then(data => {
        const tricks = data.split("\n");
        allTricks = tricks;
    });
}

generateTricks();
setTimeout(() => {initialize();}, 1000);

function initialize() {
    let cards = document.getElementsByClassName("card");
    achievedTricks = [];
    setTricks();

    for (let i = 1; i < cards.length; i++) {
        cards[i].onclick = function() {
            if (cards[i].style.backgroundImage == "linear-gradient(rgb(67, 150, 88), rgb(53, 133, 67))"){
                cards[i].style.backgroundImage = "linear-gradient(rgb(211, 71, 71), rgb(208, 37, 37))";
            } else{
                if (cards[i].style.backgroundImage == "linear-gradient(rgb(166, 166, 166), rgb(126, 126, 126))") {
                    cards[i].style.backgroundImage = 'linear-gradient(rgb(67, 150, 88), rgb(53, 133, 67))';
                } else {
                    for (let i = 1; i < 5; i++) {
                        cards[i].style.backgroundImage = "linear-gradient(rgb(166, 166, 166), rgb(126, 126, 126))";
                    }

                    allTricks.pop(cards[i].children[0].innerHTML);

                    currentTrick = cards[i].children[0].innerHTML;

                    cards[1].children[0].innerHTML = "Regular";
                    cards[2].children[0].innerHTML = "Switch";
                    cards[3].children[0].innerHTML = "Nollie";
                    cards[4].children[0].innerHTML = "Fakie";

                    cards[0].children[0].innerHTML = currentTrick;

                }
            }
        }
    }
}

function setTricks() {
    for (let i = 0; i < 4; i++) {
        let trick = allTricks[Math.floor(Math.random() * allTricks.length)];
        document.getElementById("card"+i).innerText = trick;
        document.getElementById("card"+i).style.fontSize = '30px';
    }
}

function restartGame() {
    if(confirm('Restart game?')) {
    }
}

function saveAndQuit() {
    if(confirm('Save and quit game?')) {
        window.location.href = "main.html";
    }
}

function finishRound() {
    
    let cards = document.getElementsByClassName("card");

    let generateNewTrick = true;
    for (let i = 1; i < 5; i++) {
        if (cards[i].style.backgroundImage != "linear-gradient(rgb(67, 150, 88), rgb(53, 133, 67))") {
            generateNewTrick = false;
        }
    }

    if (generateNewTrick) {
        achievedTricks.push(currentTrick);
        document.getElementById("score").innerText = "Score: " + achievedTricks.length;
        setTricks();
    } else {
        health--;
    }
}