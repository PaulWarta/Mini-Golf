let player_counter;
let rounds;
let main_div = document.getElementById("main");
let game_coloumn_width;
let players = [];
let NamenContainer = document.getElementById("Namen_Container");

function showInitialSetup () {
    document.getElementById("already_played").style.display = "none";
    document.getElementById("container_initial_setup").style.display = "flex";
}

if (localStorage.getItem("already_played") === null) {
    showInitialSetup();
} else {
    document.getElementById("restoreLastGame").style.display = "block";
    document.getElementById("already_played").style.display = "flex";
    if (localStorage.getItem("already_played") != null) {document.getElementById("restoreLastGame").style.display = "block"} else {document.getElementById("restoreLastGame").style.display = "none"}
}


function calc1() {
    let value = 0;
    let score;
    let content = $('#row' + (rounds + 2) + ' > #2');
    for (i = 2; i < (rounds + 2); i++) {
        let element = $('#row' + i + ' > #2 > input');
        if (element.val() == "") {
            score = 0;
        } else {
            score = parseInt(element.val())
        }
        value = value + score;
        content.text(value)
    }
}

function calc2() {
    let value = 0;
    let score;
    let content = $('#row' + (rounds + 2) + ' > #3');
    for (i = 2; i < (rounds + 2); i++) {
        let element = $('#row' + i + ' > #3 > input');
        if (element.val() == "") {
            score = 0;
        } else {
            score = parseInt(element.val())
        }
        value = value + score;
        content.text(value)
    }
}

function calc3() {
    let value = 0;
    let score;
    let content = $('#row' + (rounds + 2) + ' > #4');
    for (i = 2; i < (rounds + 2); i++) {
        let element = $('#row' + i + ' > #4 > input');
        if (element.val() == "") {
            score = 0;
        } else {
            score = parseInt(element.val())
        }
        value = value + score;
        content.text(value)
    }
}

function calc4() {
    let value = 0;
    let score;
    let content = $('#row' + (rounds + 2) + ' > #5');
    for (i = 2; i < (rounds + 2); i++) {
        let element = $('#row' + i + ' > #5 > input');
        if (element.val() == "") {
            score = 0;
        } else {
            score = parseInt(element.val())
        }
        value = value + score;
        content.text(value)
    }
}

function calc5() {
    let value = 0;
    let score;
    let content = $('#row' + (rounds + 2) + ' > #6');
    for (i = 2; i < (rounds + 2); i++) {
        let element = $('#row' + i + ' > #6 > input');
        if (element.val() == "") {
            score = 0;
        } else {
            score = parseInt(element.val())
        }
        console.log(i);
        value = value + score;
    }
    content.text(value)
}

function calc() {
    calc1()
    calc2()
    calc3()
    calc4()
    calc5()
}

function createRow (i) { // i has to start at 1
    let row = document.createElement("div");
    console.log("Executed createRow");
    row.setAttribute("class", "row");
    row.setAttribute("id", "row" + (i + 1));
    let index_coloumn = document.createElement("div");
    index_coloumn.setAttribute("class", "coloumn");
    index_coloumn.setAttribute("id", "1");
    index_coloumn.style.width = game_coloumn_width;
    index_coloumn.innerText = i;
    row.appendChild(index_coloumn);
    for (j = 0; j < player_counter; j++) {
        console.log("executed inner loop");
        let coloumn = document.createElement("div");
        coloumn.setAttribute("class", "coloumn");
        coloumn.setAttribute("id", j + 2);
        coloumn.style.width = game_coloumn_width;
        let input_field_score = document.createElement("input");
        input_field_score.setAttribute("type", "number");
        input_field_score.setAttribute("class", "Game_Input");
        coloumn.appendChild(input_field_score);
        row.appendChild(coloumn);
    }
    main_div.appendChild(row)
}

function createScoreRows () {
    for (k = 1; k < (rounds + 1); k++) {
        createRow(k)
    }
    let foot_row = document.createElement("div");
    foot_row.setAttribute("class", "row");
    foot_row.setAttribute("id", "row" + (rounds + 2))
    let result_corner = document.createElement("div");
    result_corner.setAttribute("class", "coloumn");
    result_corner.setAttribute("id", "Ergebnis");
    result_corner.innerText = "Ergebnis";
    result_corner.style.width = game_coloumn_width;
    foot_row.appendChild(result_corner);
    for (m = 0; m < player_counter; m++) {
        let element = document.createElement("div");
        element.setAttribute("class", "coloumn");
        element.setAttribute("id", (m + 2));
        element.style.width = game_coloumn_width;
        foot_row.appendChild(element);
    }
    main_div.appendChild(foot_row);
    let result_button = document.createElement("button");
    result_button.setAttribute("id", "calcResult");
    result_button.setAttribute("onclick", "calc()");
    result_button.innerText = "Berechnen!";
    result_button.style.fontSize = "1rem";
    main_div.appendChild(result_button);
}

function addName () {
    let NameElement = document.createElement("h2");
    let value = document.getElementById("Name_input_field").value;
    players.push(value);
    NameElement.innerText = value;
    document.getElementById("Name_input_field").value = "";
    NamenContainer.appendChild(NameElement);
}

function createGameStructure () {
    game_coloumn_width = (Math.round(100 / (player_counter + 1)) - 5) + "%";
    let headRow = document.createElement("div");
    headRow.setAttribute("class", "row");
    headRow.setAttribute("id", "row1");
    let corner = document.createElement("div");
    corner.setAttribute("class", "coloumn");
    corner.setAttribute("id", "1");
    corner.style.width = game_coloumn_width;
    corner.innerText = "Bahn";
    headRow.appendChild(corner);
    for (i = 0; i < player_counter; i++) {
        let headElement = document.createElement("div");
        headElement.setAttribute("class", "coloumn");
        headElement.setAttribute("id", (i + 2));
        headElement.style.width = game_coloumn_width;
        headElement.innerText = players[i];
        headRow.appendChild(headElement);
    }
    document.getElementById("main").appendChild(headRow);
    createScoreRows();
    document.getElementById("main").style.display = "flex";
}

function saveEnv () {
    if (localStorage.getItem("already_played") === null) {
        localStorage.setItem("already_played", "true");
    }
    localStorage.setItem("players", players);
    document.getElementById("namen_abfrage").style.display = "none";
    createGameStructure();
}

function saveRounds () {
    player_counter = parseInt(document.getElementById("SpielerAnzahlAbfrage").value);
    rounds = parseInt(document.getElementById("RundenAnzahlAbfrage").value);
    localStorage.setItem("rounds", rounds);
    localStorage.setItem("player_counter", player_counter)
    document.getElementById("container_initial_setup").style.display = "none";
    document.getElementById("namen_abfrage").style.display = "flex";
}

function resumeFromLast () {
    rounds = parseInt(localStorage.getItem("rounds"));
    players = localStorage.getItem("players").split(",")
    player_counter = parseInt(localStorage.getItem("player_counter"))
    console.log(rounds);
    console.log(players);
    console.log(player_counter);
    document.getElementById("container_initial_setup").style.display = "none";
    document.getElementById("already_played").style.display = "none";
    createGameStructure();
}

function reset () {
    localStorage.clear();
    document.getElementById("already_played").style.display = "none";
    document.getElementById("container_initial_setup").style.display = "flex";
    if (localStorage.getItem("already_played") != null) {document.getElementById("restoreLastGame").style.display = "block"} else {document.getElementById("restoreLastGame").style.display = "none"}
}