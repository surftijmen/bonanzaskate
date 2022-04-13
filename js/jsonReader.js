fetch("recourses/tricks.json")
.then(response => response.json())
.then(data => {

    for (let i = 0; i < 3; i++) {

        let tricks = [];

        data.tricks.forEach(t => {
            if (t.points == i+1){
                tricks.push(t);
            }
        });

        let trick = tricks[(Math.floor(Math.random() * tricks.length))];

        let h4 = document.getElementById("trick"+i);
        h4.innerText = trick.name;

        let image = document.getElementById("image"+i);
        image.src = trick.image;

        let color = "rgb(139, 224, 209)";
        let points = "Points: 1";

        if (trick.points == 2) {
            color = "rgb(169, 189, 136)";
            points = "Points: 2";
        } else if (trick.points == 3) {
            color = "rgb(217, 119, 89)";
            points = "Points: 3";
        }

        document.getElementById("points"+i).innerText = points;

        let h = document.getElementById("card"+i);
        h.style.backgroundColor = color;
    }
})    

