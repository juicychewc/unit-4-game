var terranUnits = [

    {
        name: "terranMarine",
        displayName: "Marine",
        healthPoints: 200,
        attackPower: 10,
        counterAttack: 6,
        image: "assets/images/marine.jpg"
    },

    {
        name: "terranGhost",
        displayName: "Ghost",
        healthPoints: 450,
        attackPower: 30,
        counterAttack: 30,
        image: "assets/images/ghost.jpg"
    },

    {
        name: "terranGoliath",
        displayName: "Goliath",
        healthPoints: 700,
        attackPower: 20,
        counterAttack: 15,
        image: "assets/images/goliath.jpg"
    },

    {
        name: "terranThor",
        displayName: "Thor",
        healthPoints: 2000,
        attackPower: 40,
        counterAttack: 20,
        image: "assets/images/thor.jpg"
    },

    {
        name: "terranBattlecruiser",
        displayName: "Battlecruiser",
        healthPoints: 5000,
        attackPower: 50,
        counterAttack: 50,
        image: "assets/images/battlecruiser.jpg"
    }];

var unitTypesDiv = $("#allUnits");
var isChosen = false;
var enemyChosen = false;

//This generates a span for each object in the array
terranUnits.forEach(function (unit) {
    var span = document.createElement("span");
    span.setAttribute("class", "initialClickPointer clickableUnits")
    span.setAttribute("id", unit.name);
    span.setAttribute("dataset", unit);
    var nameLabel = document.createElement("p");
    nameLabel.textContent = unit.displayName;
    span.appendChild(nameLabel);
    var img = document.createElement("img");
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

            //combat function
            else {
                fightButton.on("click", function () {
                    var chosenId = $(".playerSelected").attr("id");
                    var chosenUnit = terranUnits[chosenId];

                })
            }
        })

    }
});

/*
function getStronger() {
    var currentAttack = $(".playerSelected")
}
*/