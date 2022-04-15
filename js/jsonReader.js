fetch("../recourses/tricks.json")
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

        // let image = document.getElementById("image"+i);
        // image.src = trick.image;

        let color = "rgb(87, 148, 124)";

        if (trick.points == 2) {
            color = "rgb(173, 156, 109)";
        } else if (trick.points == 3) {
            color = "rgb(143, 107, 126)";
        }

        document.getElementById("points"+i).innerText = trick.points;

        let h = document.getElementById("card"+i).parentElement;
        h.style.backgroundColor = color;
    }
})    

