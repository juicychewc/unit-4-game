var terranUnits = [
    {
        name: "terranMarine",
        displayName: "Marine",
        healthPoints: 200,
        AttackPower: 10,
        CounterAttack: 6,
        image: "assets/images/marine.jpg"
    },
    {
        name: "terranGhost",
        displayName: "Ghost",
        healthPoints: 450,
        AttackPower: 30,
        CounterAttack: 30,
        image: "assets/images/ghost.jpg"
    },
    {
        name: "terranGoliath",
        displayName:"Goliath",
        healthPoints: 700,
        AttackPower: 20,
        CounterAttack: 15,
        image: "assets/images/goliath.jpg"
    },
    {
        name: "terranThor",
        displayName: "Thor",
        healthPoints: 2000,
        AttackPower: 40,
        CounterAttack: 20,
        image: "assets/images/thor.jpg"
    },
    {
        name: "terranBattlecruiser",
        displayName: "Battlecruiser",
        healthPoints: 5000,
        AttackPower: 50,
        CounterAttack: 50,
        image: "assets/images/battlecruiser.jpg"
    }];

var unitTypesDiv = $("#allUnits");

//This generates a span for each object in the array
terranUnits.forEach(function (unit) {
    var span = document.createElement("span");
    span.setAttribute("class", "initialClickPointer clickableUnits")
    span.setAttribute("id", unit.name);
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

//first object click
$(".initialClickPointer").on("click", function() {
    this.setAttribute("class", "clickableUnits playerSelected");
    $(".clickableUnits").removeClass("initialClickPointer");
    $(".playerSelected").appendTo("#playerChoiceArea");
    $(".clickableUnits").not(".playerSelected").addClass("enemyUnits");
    $(".enemyUnits").appendTo("#enemyChoiceArea");
    $("#instructions").remove();
    $("#allUnits").remove();
    $(".initialZoneSpacing").remove();
});

//opponent selector
$(".enemyUnits").on("click", function() {
    this.setAttribute("class", "clickableUnits enemyUnits currentOpponent");
    $(".currentOpponent").appendTo("#battleZone");
    var fightButton = document.createElement("button");
    button.setAttribute("class", "fightButton");
    fightButton.prepend("battlezone");
});