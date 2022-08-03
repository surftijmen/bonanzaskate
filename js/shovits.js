let allTricks;
let extra = ["switch ", "fakie ", "nollie ", "regular "];
let direction = ["fs ", "bs "];
let allCombinations = [];
let amountOfJokers = 3;


// get all shovits from file
const getAllTricks = function() {
    fetch('../recourses/shovits.txt')
    .then(response => response.text())
    .then(data => {
        const tricks = data.split("\n");
        allTricks = tricks;
    });
}

// generate all possible combinations
function generateAllCombinations() {
    allTricks.forEach(a => {
        extra.forEach(e => {
            console.log(new String(e + direction[0] + a))
            allCombinations.push(new String(e + direction[0] + a));
            allCombinations.push(new String(e + direction[1] + a));
        });
    });

    console.log(allCombinations.length);

    // add jokers
    for (let i = 0; i < amountOfJokers; i++) {allCombinations.push("joker")}
}


// get 4 shovits 
function generateShovit() {
    for (let i = 0; i < 4; i++) {
        let trick = allCombinations[Math.floor(Math.random() * allCombinations.length)];
        console.log(allCombinations.length);
        document.getElementById("card"+i).innerText = trick;
        document.getElementById("card"+i).style.fontSize = '30px';
    }
}

// initialize the code
function initialize() {
    getAllTricks();
    setTimeout(() => {
        generateAllCombinations();
        generateShovit();
    }, 1000);
}

initialize();
