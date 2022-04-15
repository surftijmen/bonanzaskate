initializeCards = function() {
    // get all the cards
    let cards = document.getElementsByClassName("card");
    
    // store all card's rotations in an array
    let rotation = Array(cards.length).fill(0);
    
    // add onclick event to cards to rotate them 180 degrees
    for (let i = 0; i < cards.length; i++) {
        cards[i].onclick = function() {
            // rotate 180 degrees 
            rotation[i] = (rotation[i] + 180) % 360;
            cards[i].style.transform = 'rotateY('+rotation[i]+'deg)'; 
        }
    }
}

initializeCards();