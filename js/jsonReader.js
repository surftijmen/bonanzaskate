fetch("recourses/tricks.json")
.then(response => response.json())
.then(data => {

    let trick = data.tricks[(Math.floor(Math.random() * data.tricks.length))];

    let h4 = document.getElementById("trick");
    h4.innerText = trick.name;

    let image = document.getElementById("image");
    image.src = trick.image;

    let color = "rgb(139, 224, 209)";
    let points = "Points: 2";

    if (trick.points == 2) {
        color = "rgb(169, 189, 136)";
        points = "Points: 1";
    } else if (trick.points == 3) {
        color = "rgb(217, 119, 89)";
        points = "Points: 3";
    }

    document.getElementById("points").innerText = points;

    let h = document.getElementById("card");
    h.style.backgroundColor = color;
})    

