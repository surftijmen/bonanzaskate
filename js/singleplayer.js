initializeCards = function() {
    // get all the cards
    let cards = document.getElementsByClassName("flip-card-inner");
    
    // store all card's rotations in an array
    let rotation = Array(cards.length).fill(0);
    
    // add onclick event to cards to rotate them 180 degrees
    for (let i = 0; i < cards.length; i++) {
        cards[i].onclick = function() {
            // rotate 180 degrees 
            rotation[i] = (rotation[i] + 180) % 360;
            cards[i].style.transition = 'transform 0.5s 0.0s'
            cards[i].style.transform = 'rotateY('+rotation[i]+'deg)'; 
            for (let j = 0; j < cards.length; j++) {
                if (i!=j){
                    rotation[j] = 0;
                    cards[j].style.transition = 'transform 0.5s 0.2s'
                    cards[j].style.transform = 'rotateY('+0+'deg)'; 
                }
            }
        }
    }

        // get score from cookie
    if (getCookie("score") != null) {
        score += parseInt(getCookie("score"));
        life += parseInt(getCookie("life"));
    } else {
        resetGame();
    }
    setScore();
}

// create score and lifes
var score = 0;
var life = 0;

// initialize all cards
initializeCards();

function decreaseLife() {
    life = parseInt(life)-1;
    setCookie("life", parseInt(life));
    document.getElementsByClassName("life")[2-life].style.opacity = "0";
    if (life <= 0) {
        resetGame();
    }
    console.log(life);
}

// reset score
function resetGame() {
    life = 3;
    score = 0;

    setCookie("life", 3);
    setCookie("score", 0);
    
    setScore();

    lifes = document.getElementsByClassName("life");
    for (let i = 0; i < lifes.length; i++) {
        lifes[i].style.opacity = "0.75";
    }
}

// increase score 
function addScore(addition) {
    score += parseInt(addition)*100;
    setCookie("score", parseInt(score));
    setScore();
    generateNewTricks();
}

function setScore() {
    document.getElementById("score").innerText = "Score: " + score + " pt";
}