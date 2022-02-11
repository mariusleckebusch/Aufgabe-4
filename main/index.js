var error = document.getElementById('error');
var html_schaf = document.getElementById('schaf');
var html_wolf = document.getElementById('wolf');
var html_kohlkopf = document.getElementById('kohlkopf');
var html_bauer = document.getElementById('bauer');
var button_bauer_und_schaf = document.getElementById('bauerundschaf');
var button_bauer_und_wolf = document.getElementById('bauerundwolf');
var button_bauer_und_kohlkopf = document.getElementById('bauerundkohlkopf');
var button_bauer = document.getElementById('bauer1');
var button_restart = document.getElementById('restart').onclick = function () { location.reload() };
var keysenabled = true;
function UpdateGameInfo() {
    html_schaf.innerText = JSON.stringify(Schaf);
    html_wolf.innerText = JSON.stringify(Wolf);
    html_kohlkopf.innerText = JSON.stringify(Kohlkopf);
    html_bauer.innerText = JSON.stringify(Bauer);
}

var Wolf = {
    name: "Wolf",
    age: 1,
    position: "right"
}

var Schaf = {
    name: "Schaf",
    age: 1,
    position: "right"
}

var Kohlkopf = {
    name: "Kohlkopf",
    age: 1,
    position: "right"
}

var Bauer = {
    name: "Bauer",
    age: 1,
    position: "right"
}

UpdateGameInfo()


window.addEventListener('keydown', function (event) {
    if (keysenabled) {
        if (event.keyCode == 37) {
            error.innerText = 'Left was pressed';
            //Bauer und Schaf
            if (Bauer.position != Schaf.position) {
                error.innerText = 'Der Bauer ist nicht beim Schaf';
            } else {
                if (Bauer.position == "right" && Schaf.position == "right") {
                    Bauer.position = "left";
                    Schaf.position = "left";
                    Bauer.age = Bauer.age + 1;
                    Schaf.age = Schaf.age + 1;
                    CheckLebewesen();
                    UpdateGameInfo();
                } else {
                    Bauer.position = "right";
                    Schaf.position = "right";
                    Bauer.age = Bauer.age + 1;
                    Schaf.age = Schaf.age + 1;
                    CheckLebewesen();
                    UpdateGameInfo();
                }
            }
        }
        if (event.keyCode == 39) {
            error.innerText = 'Right was pressed';
            //Bauer und Wolf
            if (Bauer.position != Wolf.position) {
                error.innerText = 'Der Bauer ist nicht beim Wolf';
            } else {
                if (Bauer.position == "right" && Wolf.position == "right") {
                    Bauer.position = "left";
                    Wolf.position = "left";
                    Bauer.age = Bauer.age + 1;
                    Wolf.age = Wolf.age + 1;
                    CheckLebewesen();
                    UpdateGameInfo();
                } else {
                    Bauer.position = "right";
                    Wolf.position = "right";
                    Bauer.age = Bauer.age + 1;
                    Wolf.age = Wolf.age + 1;
                    CheckLebewesen();
                    UpdateGameInfo();
                }
            }
        }
        if (event.keyCode == 40) {
            error.innerText = 'Down was pressed';
            //Bauer und Kohlkopf
            if (Bauer.position != Kohlkopf.position) {
                error.innerText = 'Der Bauer ist nicht beim Kohlkopf';
            } else {
                if (Bauer.position == "right" && Kohlkopf.position == "right") {
                    Bauer.position = "left";
                    Kohlkopf.position = "left";
                    Bauer.age = Bauer.age + 1;
                    Kohlkopf.age = Kohlkopf.age + 1;
                    CheckLebewesen();
                    UpdateGameInfo();
                } else {
                    Bauer.position = "right";
                    Kohlkopf.position = "right";
                    Bauer.age = Bauer.age + 1;
                    Kohlkopf.age = Kohlkopf.age + 1;
                    CheckLebewesen();
                    UpdateGameInfo();
                }
            }
        }
        if (event.keyCode == 38) {
            error.innerText = 'Up was pressed';
            //Bauer alleine
            if (Bauer.position == "right" && Kohlkopf.position == "right") {
                Bauer.position = "left";
                Bauer.age = Bauer.age + 1;
                CheckLebewesen();
                UpdateGameInfo();
            } else {
                Bauer.position = "right";
                Bauer.age = Bauer.age + 1;
                CheckLebewesen();
                UpdateGameInfo();
            }
        }
    }
});

button_bauer_und_schaf.onclick = function () {
    if (keysenabled) {
        if (Bauer.position != Schaf.position) {
            error.innerText = 'Der Bauer ist nicht beim Schaf';
        } else {
            if (Bauer.position == "right" && Schaf.position == "right") {
                Bauer.position = "left";
                Schaf.position = "left";
                Bauer.age = Bauer.age + 1;
                Schaf.age = Schaf.age + 1;
                CheckLebewesen();
                UpdateGameInfo();
            } else {
                Bauer.position = "right";
                Schaf.position = "right";
                Bauer.age = Bauer.age + 1;
                Schaf.age = Schaf.age + 1;
                CheckLebewesen();
                UpdateGameInfo();
            }
        }

    } else {
        button_bauer_und_schaf.disabled = true;
    }
}
button_bauer_und_wolf.onclick = function () {
    if (keysenabled) {
        if (Bauer.position != Wolf.position) {
            error.innerText = 'Der Bauer ist nicht beim Wolf';
        } else {
            if (Bauer.position == "right" && Wolf.position == "right") {
                Bauer.position = "left";
                Wolf.position = "left";
                Bauer.age = Bauer.age + 1;
                Wolf.age = Wolf.age + 1;
                CheckLebewesen();
                UpdateGameInfo();
            } else {
                Bauer.position = "right";
                Wolf.position = "right";
                Bauer.age = Bauer.age + 1;
                Wolf.age = Wolf.age + 1;
                CheckLebewesen();
                UpdateGameInfo();
            }
        }
    } else {
        button_bauer_und_wolf.disabled = true;
    }
}
button_bauer_und_kohlkopf.onclick = function () {
    if (keysenabled) {
        if (Bauer.position != Kohlkopf.position) {
            error.innerText = 'Der Bauer ist nicht beim Kohlkopf';
        } else {
            if (Bauer.position == "right" && Kohlkopf.position == "right") {
                Bauer.position = "left";
                Kohlkopf.position = "left";
                Bauer.age = Bauer.age + 1;
                Kohlkopf.age = Kohlkopf.age + 1;
                CheckLebewesen();
                UpdateGameInfo();
            } else {
                Bauer.position = "right";
                Kohlkopf.position = "right";
                Bauer.age = Bauer.age + 1;
                Kohlkopf.age = Kohlkopf.age + 1;
                CheckLebewesen();
                UpdateGameInfo();
            }
        }
    } else {
        button_bauer_und_kohlkopf.disabled = true;
    }
}
button_bauer.onclick = function () {
    if (keysenabled) {
        if (Bauer.position == "right" && Kohlkopf.position == "right") {
            Bauer.position = "left";
            Bauer.age = Bauer.age + 1;
            CheckLebewesen();
            UpdateGameInfo();
        } else {
            Bauer.position = "right";
            Bauer.age = Bauer.age + 1;
            CheckLebewesen();
            UpdateGameInfo();
        }
    } else {
        button_bauer.disabled = true;
    }
}
function CheckLebewesen() {
    if (Wolf.position == Schaf.position && Bauer.position !== Schaf.position) {
        error.innerText = "Der Wolf hat das Schaf gefressen, da der Bauer nicht aufgepasst hat!";
        keysenabled = false;
    }
    if (Schaf.position == Kohlkopf.position && Bauer.position !== Kohlkopf.position) {
        error.innerText = "Das Schaf hat den Kohlkopf gefressen, da der Bauer nicht aufgepasst hat!";
        keysenabled = false;
    }
    if (Wolf.position == "left" && Schaf.position == "left" && Kohlkopf.position == "left" && Bauer.position == "left") {
        error.innerText = "Alle Lebewesen wurden erfolgreich auf das andere Ufer gebracht";
        keysenabled = false;
    }
    if (Wolf.age == 15 || Bauer.age == 15 || Kohlkopf.age == 15 || Schaf.age == 15) {
        error.innerText = "Ein Lebewesen ist gestorben da es zu Alt geworden ist";
        keysenabled = false;
    }
}