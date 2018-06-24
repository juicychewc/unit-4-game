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
    span.setAttribute("class", "clickableUnits")
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

//working function moves objects except clicked
//new object has ".clickableUnits" "#unit.name" "#playerSelected"
$(".clickableUnits").on("click", function() {
    this.setAttribute("id", "playerSelected");
    $("#playerSelected").appendTo("#playerChoiceArea");
    $(".clickableUnits").not("#playerSelected").appendTo("#enemyChoiceArea");
    $("#instructions").remove();
})

