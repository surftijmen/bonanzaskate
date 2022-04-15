fetch("../recourses/tricks.json")
.then(response => response.json())
.then(data => {

    for (let i = 0; i < 4; i++) {

        let tricks = [];

        data.tricks.forEach(t => {
            if (t.points == i+1){
                tricks.push(t);
            }
        });

        let trick = tricks[(Math.floor(Math.random() * tricks.length))];

        let h4 = document.getElementById("trick"+i);
        h4.innerText = trick.name;

        // let image = document.getElementById("image"+i);
        // image.src = trick.image;

        document.getElementById("points"+i).innerText = trick.points;
    }
})    

