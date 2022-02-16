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

Brutfore()
function Brutfore() {
    for (var i = 0; i < 1000; i++) {
        var random = Math.floor(Math.random() * (5 - 1)) + 1;
        if (Check() == false) {
            if (random == 1) {
                if (BauerundSchaf() == true) {
                    AddLog('BauerundSchaf()');
                }
            }
            if (random == 2) {
                if (Bauer_Key() == true) {
                    AddLog('Bauer_Key()');
                }
            }
            if (random == 3) {
                if (BauerundWolf() == true) {
                    AddLog('BauerundWolf()');
                }
            }
            if (random == 4) {
                if (BauerundKohlkopf() == true) {
                    AddLog('BauerundKohlkopf()');
                }
            }
        } else if (Check() == true) {
            process.exit(0)
        }
    }
}
function AddLog(text) {
    console.log(text);
}








function BauerundSchaf() {
    if (Bauer.position != Schaf.position) {
        return false;
    } else {
        if (Bauer.position == "right" && Schaf.position == "right") {
            Bauer.position = "left";
            Schaf.position = "left";
            Bauer.age = Bauer.age + 1;
            Schaf.age = Schaf.age + 1;
            return true;
        } else {
            Bauer.position = "right";
            Schaf.position = "right";
            Bauer.age = Bauer.age + 1;
            Schaf.age = Schaf.age + 1;
            return true;
        }
    }
}

function BauerundWolf() {
    if (Bauer.position != Wolf.position) {
        return false;
    } else {
        if (Bauer.position == "right" && Wolf.position == "right") {
            Bauer.position = "left";
            Wolf.position = "left";
            Bauer.age = Bauer.age + 1;
            Wolf.age = Wolf.age + 1;
            return true;
        } else {
            Bauer.position = "right";
            Wolf.position = "right";
            Bauer.age = Bauer.age + 1;
            Wolf.age = Wolf.age + 1;
            return true;
        }
    }
}

function BauerundKohlkopf() {
    if (Bauer.position != Kohlkopf.position) {
        return false;
    } else {
        if (Bauer.position == "right" && Kohlkopf.position == "right") {
            Bauer.position = "left";
            Kohlkopf.position = "left";
            Bauer.age = Bauer.age + 1;
            Kohlkopf.age = Kohlkopf.age + 1;
            return true;
        } else {
            Bauer.position = "right";
            Kohlkopf.position = "right";
            Bauer.age = Bauer.age + 1;
            Kohlkopf.age = Kohlkopf.age + 1;
            return true;
        }
    }
}

function Bauer_Key() {
    if (Bauer.position == "right" && Kohlkopf.position == "right") {
        Bauer.position = "left";
        return true;
    } else {
        Bauer.position = "right";
        return true;
    }
}



function Check() {
    if (Wolf.position == Schaf.position && Bauer.position !== Schaf.position) {
        return false;
    }
    if (Schaf.position == Kohlkopf.position && Bauer.position !== Kohlkopf.position) {
        return false;
    }
    if (Wolf.position == "left" && Schaf.position == "left" && Kohlkopf.position == "left" && Bauer.position == "left") {
        return true;
    } else {
        return false;
    }
}


