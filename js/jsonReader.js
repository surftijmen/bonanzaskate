fetch("recourses/tricks.json")
.then(response => response.json())
.then(data => {

    let trick = data.tricks[(Math.floor(Math.random() * data.tricks.length))];

    let h4 = document.createElement("h4");
    h4.innerText = trick.name;
    
    let h = document.getElementById("card");
    h.appendChild(h4);

    let image = document.getElementById("image");
    image.src = trick.image;

    let color = "rgb(155, 102, 102)";
    if (trick.points == 2) {
        color = "rgb(1, 102, 102)";
    } else if (trick.points == 3) {
        color = "rgb(255, 102, 102)";
    }

    h.style.backgroundColor = color
})    

