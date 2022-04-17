// initialize all cards
function initializeCards(){
    // retrieve all the cards from document
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
            
            // flip other cards back, except last one
            for (let j = 0; j < cards.length-1; j++) {
                if (i!=j){
                    // reset the rotation
                    rotation[j] = 0;

                    // flip the cards back
                    cards[j].style.transition = 'transform 0.5s 0.2s'
                    cards[j].style.transform = 'rotateY('+0+'deg)'; 
                }
            }
        }
    }

    // get score from cookie
    if (getCookie("score") != null) {
        // retrieve data from cookies
        score += parseInt(getCookie("score"));
        life += parseInt(getCookie("life"));
        
        // check if the cookies contained correct data
        if (isNaN(score)) {
            // if score is NaN, reset data
            score = 0;
            life = 3;
        }
        // display data on screen
        displayScore();
    } else {
        // reset the game if cookies don't exist
        resetGame();
    }
}

// create score and lifes
var score = 0;
var life = 0;

// initialize all cards
initializeCards();

// remove a life and check if game-over
function decreaseLife() {
    // decrease a life
    life = parseInt(life)-1;
    
    //update cookie
    setCookie("life", parseInt(life));
    
    // disable the life on the screen
    document.getElementsByClassName("life")[2-life].style.opacity = "0";
    
    // check if still alive
    if (life <= 0) {
        // reset game if game-over
        resetGame();
        
        // end the game with a small delay
        setTimeout(() => {
            endGame();
        }, 50);
    }
}

// reset the game
function resetGame() {
    // reset scores
    life = 3;
    score = 0;

    // reset cookies
    setCookie("life", 3);
    setCookie("score", 0);

    // reset the display
    displayScore();

    // enable all lifes 
    let lifes = document.getElementsByClassName("life");
    for (let i = 0; i < lifes.length; i++) {
        lifes[i].style.opacity = "0.75";
    }
}

// increase score 
function addScore(addition) {

    // increase the score and update the cookie
    score += parseInt(addition)*100;
    setCookie("score", parseInt(score));

    // display score to screen 
    displayScore();

    // generate new tricks
    generateNewTricks();

    // flip all cards back
    flipCardsBack();
}

// show the score to the screen
function displayScore() {
    document.getElementById("score").innerText = "Score: " + score + " pt";
}

// end the game
function endGame() {
    // retrieve the last card
    let card = document.getElementsByClassName("flip-card-inner")[4];
    
    // flip the last card
    card.style.transition = 'transform 0.5s 0.2s'
    card.style.transform = 'rotateY('+180+'deg)'; 
}

// flip all the cards back
function flipCardsBack() {
    // retrieve all cards
    let cards = document.getElementsByClassName("flip-card-inner");
    
    // flip all cards back
    for (let j = 0; j < cards.length; j++) {
        cards[j].style.transition = 'transform 0.5s 0.2s'
        cards[j].style.transform = 'rotateY('+0+'deg)';         
    }
}

// return to the main menu 
function returnToMenu() {
    window.location.href = "main.html";
}