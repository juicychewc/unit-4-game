var terranUnits = {

    terranMarine: {
        name: "terranMarine",
        displayName: "Marine",
        healthPoints: 200,
        attackPower: 10,
        counterAttack: 6,
        image: "assets/images/marine.jpg"
    },

    terranGhost: {
        name: "terranGhost",
        displayName: "Ghost",
        healthPoints: 450,
        attackPower: 30,
        counterAttack: 30,
        image: "assets/images/ghost.jpg"
    },

    terranGoliath: {
        name: "terranGoliath",
        displayName: "Goliath",
        healthPoints: 700,
        attackPower: 20,
        counterAttack: 15,
        image: "assets/images/goliath.jpg"
    },

    terranThor: {
        name: "terranThor",
        displayName: "Thor",
        healthPoints: 2000,
        attackPower: 40,
        counterAttack: 20,
        image: "assets/images/thor.jpg"
    },

    terranBattlecruiser: {
        name: "terranBattlecruiser",
        displayName: "Battlecruiser",
        healthPoints: 5000,
        attackPower: 50,
        counterAttack: 50,
        image: "assets/images/battlecruiser.jpg"
    }
};

var unitTypesDiv = $("#allUnits");
var isChosen = false;
var enemyChosen = false;
var chosenId;
var enemyId;
var chosenHp;
var currentAttack = 0;
var currentEnemyHp;
var enemiesDefeated = 0;

//This generates a span for each object in the array
for (var key in terranUnits) {
    var span = document.createElement("span");
    span.setAttribute("class", "initialClickPointer clickableUnits");
    var nameId = terranUnits[key].name;
    span.setAttribute("id", nameId);
    var nameLabel = document.createElement("p");
    nameLabel.textContent = terranUnits[key].displayName;
    span.appendChild(nameLabel);
    var img = document.createElement("img");
    img.setAttribute("src", terranUnits[key].image);
    img.src = terranUnits[key].image;
    span.appendChild(img);
    var hp = document.createElement("p");
    hp.setAttribute("class", "remainingHp");
    hp.textContent = terranUnits[key].healthPoints;
    span.appendChild(hp);
    unitTypesDiv.append(span);
    isChosen === false;
};

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
        chosenId = $(".playerSelected").attr("id");
        chosenUnit = terranUnits[chosenId];
        chosenHp = chosenUnit.healthPoints;
    }

    //second object selection
    else {
        $(".enemyUnits").on("click", function () {
            if (enemyChosen === false) {
                this.setAttribute("class", "clickableUnits enemyUnits currentOpponent");
                enemyChosen === true;
                if ($("#buttonSpot").length > 0) {
                    var fightButton = document.createElement("button");
                    fightButton.setAttribute("class", "fightButton");
                    fightButton.textContent = "Fight!";
                    $(".currentOpponent").appendTo("#battleZone");
                    $("#buttonSpot").append(fightButton);
                    $(".currentOpponent").off("click");
                }
            }
        })
    }
});

function gameOver() {
    location.reload();
};

$("#combat").on("click", "#resetButton", function () {
    gameOver();
    this.remove();
});

//combat function
$("#buttonSpot").on("click", ".fightButton", function () {
    chosenId = $(".playerSelected").attr("id");
    enemyId = $(".currentOpponent").attr("id");
    chosenUnit = terranUnits[chosenId];
    if ($(this).length != -1) {
        var chosenAttack = chosenUnit.attackPower;
        var currentOpponent = terranUnits[enemyId];
        var currentCounter = currentOpponent.counterAttack;
        currentEnemyHp = currentOpponent.healthPoints;
        function thatHurt() {
            chosenHp = chosenHp - currentCounter;
        };
        function getStronger() {
            currentAttack = currentAttack + chosenAttack;
        };
        function takeThis() {
            currentEnemyHp = currentEnemyHp - currentAttack;
        };
        function combatText() {
            var combatDiv = $("#combat");
            var damageOut = $("<p></p>");
            var damageIn = $("<p></p>");
            damageOut.text("You attacked " + currentOpponent.displayName + " for " + currentAttack);
            damageIn.text(currentOpponent.displayName + " attacked you back for " + currentCounter);
            var textArea = $("<div></div>");
            combatDiv.empty();
            textArea.append(damageOut, damageIn);
            combatDiv.append(textArea);
        };
        function damageResult() {
            var playerRemainingHp = $(".playerSelected p.remainingHp");
            var enemyRemainingHp = $(".currentOpponent p.remainingHp");
            playerRemainingHp.text(chosenHp);
            enemyRemainingHp.text(currentEnemyHp);
        };
        function mayIHaveAnother() {
            if (enemiesDefeated < 4) {
            var resolve = $("#combat");
            resolveMessage = $("<p></p>");
            resolveMessage.text("You defeated " + currentOpponent.displayName + "!");
            resolve.empty();
            resolve.append(resolveMessage);
            $(".currentOpponent").remove();
            $(".fightButton").remove();
            enemyChosen === false;
            enemiesDefeated + 1;
            }
            else {
                resolve.empty();
                resolveMessage.text("You defeated everyone!");
                resolve.append(resolveMessage);
            }
        };
        getStronger();
        thatHurt();
        takeThis();
        combatText();
        damageResult();
        if ((currentEnemyHp <= 0) && (chosenHp > 0)) {
            mayIHaveAnother();
        }
        if ((chosenHp <= 0) && (currentEnemyHp > 0)) {
            var resetButton = document.createElement("button");
            resetButton.setAttribute("id", "resetButton");
            resetButton.textContent = ("Respawn");
            $(resetButton).appendTo("#combat");
        }
    }
});

