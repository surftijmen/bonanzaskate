generateNewTricks = function() {
    fetch("../recourses/tricks.json")
    .then(response => response.json())
    .then(data => {
        
        let allTricks = [];

        for (let i = 0; i < 4; i++) {

            let tricks = [];

            data.tricks.forEach(t => {
                if (t.points == i+1){
                    tricks.push(t);
                }
            });

            let trick = tricks[(Math.floor(Math.random() * tricks.length))];
            allTricks.push(trick);
            
        }
        setTricks(allTricks);
        setCookie("singleplayerTricks", JSON.stringify(allTricks));
    })    
}

setTricks = function(allTricks) {
    for (let i = 0; i < 4; i++) {
        trick = allTricks[i];
        
        document.getElementById("points"+i).innerText = trick.points;
        
        let h4 = document.getElementById("trick"+i);
        h4.innerText = trick.name;
    }
}

start = function() {
    if (getCookie("singleplayerTricks") == null) {
        generateNewTricks();
    } else {
        setTricks(JSON.parse(getCookie("singleplayerTricks")));
    }
}

start()