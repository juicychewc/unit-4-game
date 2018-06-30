var terranUnits = [

    terranMarine = {
        name: "terranMarine",
        displayName: "Marine",
        healthPoints: 200,
        attackPower: 10,
        counterAttack: 6,
        image: "assets/images/marine.jpg"
    },

    terranGhost = {
        name: "terranGhost",
        displayName: "Ghost",
        healthPoints: 450,
        attackPower: 30,
        counterAttack: 30,
        image: "assets/images/ghost.jpg"
    },

    terranGoliath = {
        name: "terranGoliath",
        displayName: "Goliath",
        healthPoints: 700,
        attackPower: 20,
        counterAttack: 15,
        image: "assets/images/goliath.jpg"
    },

    terranThor = {
        name: "terranThor",
        displayName: "Thor",
        healthPoints: 2000,
        attackPower: 40,
        counterAttack: 20,
        image: "assets/images/thor.jpg"
    },

    terranBattlecruiser = {
        name: "terranBattlecruiser",
        displayName: "Battlecruiser",
        healthPoints: 5000,
        attackPower: 50,
        counterAttack: 50,
        image: "assets/images/battlecruiser.jpg"
    }
];

var unitTypesDiv = $("#allUnits");
var isChosen = false;
var enemyChosen = false;
var chosenId;
var enemyId;

//This generates a span for each object in the array
terranUnits.forEach(function (unit) {
    var span = document.createElement("span");
    span.setAttribute("class", "initialClickPointer clickableUnits");
    var nameId = unit.name;
    span.setAttribute("id", nameId);
    var nameLabel = document.createElement("p");
    nameLabel.textContent = unit.displayName;
    span.appendChild(nameLabel);
    var img = document.createElement("img");
    img.setAttribute("src", unit.image);
    img.src = unit.image;
    span.appendChild(img);
    var hp = document.createElement("p");
    hp.textContent = unit.healthPoints;
    span.appendChild(hp);
    unitTypesDiv.append(span);
});


//first object selection
$(".clickableUnits").on("click", function () {
    if (isChosen === false) {
        this.setAttribute("class", "clickableUnits playerSelected");
        isChosen = true;
        $(".clickableUnits").removeClass("initialClickPointer");
        $(".playerSelected").appendTo("#playerChoiceArea");
        $(".clickableUnits").not(".playerSelected").addClass("enemyUnits");
        $(".enemyUnits").appendTo("#enemyChoiceArea");
        $("#instructions").remove();
        $("#allUnits").remove();
        $(".initialZoneSpacing").remove();
    }

    //second object selection
    else {
        $(".enemyUnits").on("click", function () {
            if (enemyChosen === false) {
                this.setAttribute("class", "clickableUnits enemyUnits currentOpponent");
                enemyChosen === true;
                var fightButton = document.createElement("button");
                fightButton.setAttribute("class", "fightButton");
                fightButton.textContent = "Fight!";
                $(".currentOpponent").appendTo("#battleZone");
                $(fightButton).appendTo("#buttonSpot");
                $(".currentOpponent").off("click");
            }
        })
    }
});

//combat function
$("#buttonSpot").on("click", ".fightButton", function () {
    chosenId = $(".playerSelected").attr("id");
    if (terranUnits.indexOf(chosenId) >= 0) {
        var chosenUnit = this;
    }
    // var chosenAttack = chosenUnit.attackPower;
    // var chosenHp = chosenUnit.healthPoints;

    // var enemyId = $(".currentOpponent").attr("id");
    // var currentOpponent = terranUnits[enemyId];
    // var currentCounter = currentOpponent.counterAttack;
    // var currentEnemyHp = currentOpponent.healthPoints;
    // function thatHurt() {
    //     chosenHp = chosenHp - currentCounter;
    // };
    // function getStronger() {
    //     var currentAttack = currentAttack + chosenAttack;
    // }
    // function takeThis() {
    //     currentEnemyHp = currentEnemyHp - currentAttack;
    // }
    // getStronger();
    // thatHurt();
    // takeThis();
});

