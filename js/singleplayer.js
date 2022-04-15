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
}

initializeCards();