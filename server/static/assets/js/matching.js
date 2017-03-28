var matchingDom = {
    "matchingForm": document.getElementById("matching-form"),
};

var hobbies = {
    "Sports": [
        "Football/Soccer",
        "Basketball",
        "Cricket",
        "Tennis",
        "Athletics",
        "Rugby",
        "Formula 1",
        "Boxing",
        "Ice Hockey",
        "Volleyball",
        "Golf",
        "Baseball",
        "American Football",
        "MMA",
        "MotoGP",
        "Field Hockey",
        "Cycling",
        "Badminton",
        "Swimming",
        "Snooker",
        "Table Tennis",
        "Gymnastics",
        "Handball",
        "Wrestling",
        "Skiing",
        "Horse",
        "Racing",
        "Bicycling",
        "Hiking",
        "Boating",
        "Running",
        "Dancing"
    ],
    "Games": [
        "Party games",
        "Tabletop Games",
        "Arcade Games",
        "Computer Games",
        "Console Games",
        "Handheld games",
        "Mobile games",
        "Multiplayer games",
        "Singleplayer games"
    ],
    "Reading/Writing": [
        "Fiction",
        "Comedy",
        "Drama",
        "Horror",
        "Non-fiction",
        "Realistic fiction",
        "Romance novel",
        "Satire",
        "Tragedy",
        "Tragicomedy",
        "Fantasy"
    ],
    "Others": [
        "Watching TV",
        "Fishing",
        "Computer Technology",
        "Music",
        "Hunting",
        "Shopping",
        "Traveling",
        "Socializing",
        "Church Activities",
        "Crafts",
        "Cooking",
        "Camping",
        "Cars",
        "Animal Care",
        "Bowling",
        "Painting",
        "Theater",
        "Billiards",
        "Beach"
    ]
}

function matchingRun() {
    Object.keys(hobbies).forEach(function(hobby) {
        var fieldset = createFieldSet(hobby);
        addCheckbox(fieldset, hobbies[hobby]);
        matchingDom.matchingForm.appendChild(fieldset);
    });
}

function addCheckbox(fieldset, hobbylist) {
    hobbylist.forEach(function(onehobby) {
        var checkboxSpan = createCheckbox(onehobby);
        fieldset.appendChild(checkboxSpan);
    });
}

function createCheckbox(content) {
    var span = document.createElement("span");
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("value", content);
    span.appendChild(checkbox);
    span.appendChild(document.createTextNode(content));
    return span;
}

function createFieldSet(legend) {
    var fieldset = document.createElement("fieldset");
    var legendNode = document.createElement("legend");
    legendNode.innerText = legend;
    fieldset.appendChild(legendNode);
    return fieldset;
}

matchingRun();