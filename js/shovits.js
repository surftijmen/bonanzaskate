// initialize all variables
let allTricks;
let extra = ["switch ", "fakie ", "nollie ", "regular "];
let direction = ["fs ", "bs "];
let allCombinations = [];
let amountOfJokers = 3;
let score = 0;
let trick;
let mayClick = false;

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

    // add jokers
    for (let i = 0; i < amountOfJokers; i++) {allCombinations.push("joker")}
}


// get 4 shovits 
function generateShovit() {
    trick = allCombinations[Math.floor(Math.random() * allCombinations.length)];
    document.getElementById("card").innerText = trick;
}

// initialize the code
function initialize() {
    getAllTricks();
    setTimeout(() => {
        generateAllCombinations();
        generateShovit();
        mayClick = true;
    }, 1000);
}

// this function is called if you press the 'done!' button to get a new trick
function newTrick() {
    if (mayClick){
        document.getElementsByClassName('card')[0].style.animation="rotate 0.4s linear 1";
        mayClick = false;
        if (trick != "joker"){score++;}
        if (allCombinations.length >1) {
            
            setTimeout(() => {
                if (score < 10) document.getElementById("score").innerText = "0" + score;
                if (score >= 10) document.getElementById("score").innerText = score;
                allCombinations.pop(trick);
                generateShovit();
                setTimeout(() => {
                    mayClick = true;
                    document.getElementsByClassName('card')[0].style.animation="";
                }, 300);
            }, 100);


        }else{
            document.getElementById("card").innerText = "Well done! You finished!";
        }
    }
}

initialize();
