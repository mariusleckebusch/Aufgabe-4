var error = document.getElementById('error');
var html_schaf = document.getElementById('schaf');
var html_wolf = document.getElementById('wolf');
var html_kohlkopf = document.getElementById('kohlkopf');
var html_bauer = document.getElementById('bauer');
var button_restart = document.getElementById('restart').onclick = function () { RestartGame() };
var button_bauer_und_schaf = document.getElementById('bauerundschaf');
var button_bauer_und_wolf = document.getElementById('bauerundwolf');
var button_bauer_und_kohlkopf = document.getElementById('bauerundkohlkopf');
var button_bauer = document.getElementById('bauer1');
var button_auto = document.getElementById('auto').onclick = function () { Teilaufgabe_5() };
var button_logs = document.getElementById('logs').onclick = function () { Log() };
var button_clearlog = document.getElementById('clearlogs').onclick = function() { ClearLog() };
var keysenabled = true;
var logs = true;
var maxage = 15;
AddLog("Loaded Html Variables!");
Log();

function Brutfore() {
    var random = Math.floor(Math.random() * (5 - 1) ) + 1;
    console.log(random)
    for(var i = 0; i < 1000; i++) {
        if(Wolf.position == Schaf.position || Schaf.position == Kohlkopf.position && Bauer.position != Schaf.position || Bauer.position != Schaf.position || Bauer.position != Wolf.position) {
            if(random == 1) {

            }
            if(random == 2) {

            }
            if(random == 3) {

            }
            if(random == 4) {

            }
        } else if(Wolf.position == "left" && Schaf.position == "left" && Bauer.position == "left" && Kohlkopf.position == "left") {
            return;
        }
    }
}

function Log() {
    if (!logs) {
        var textarea = document.getElementById('content');
        textarea.style.display = 'block'
        logs = true; 
        document.getElementById('logs').innerText = "Hide Logs";
    } else {
        var textarea = document.getElementById('content');
        textarea.style.display = 'none'
        logs = false; 
        document.getElementById('logs').innerText = "Show Logs";
    }
}

function AddLog(log) {
        var options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        var date = new Date(Date.now())

       console.log("[" + date.toLocaleDateString("de-DE", options) + "]: " +log)
       var div = document.createElement('div');
       var span = document.createElement('span');
       var span1 = document.createElement('span');
       div.className = 'instruction';
       span.className = 'user';
       span.innerText = "[" + date.toLocaleDateString("de-DE", options) + "]: ";
       span1.className = 'info'
       span1.innerText = log;
       div.appendChild(span)
       span.appendChild(span1)
       document.getElementById('content').appendChild(div)

}

function ClearLog() {document.getElementById('content').innerHTML="";}

function UpdateGameInfo() {
    html_schaf.innerText = JSON.stringify(Schaf);
    html_wolf.innerText = JSON.stringify(Wolf);
    html_kohlkopf.innerText = JSON.stringify(Kohlkopf);
    html_bauer.innerText = JSON.stringify(Bauer);
}
error.innerText = "Press a Button to Start!";
AddLog("Start Mesaage set!");
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
AddLog("Loaded Person Variables!");
UpdateGameInfo()
AddLog("Update Game Info!");

function RestartGame() {
    Bauer.age = 1;
    Bauer.position = "right";
    Kohlkopf.age = 1;
    Kohlkopf.position = "right";
    Schaf.age = 1;
    Schaf.position = "right";
    Wolf.age = 1;
    Wolf.position = "right";
    document.getElementById('content').innerHTML = "";
    AddLog("Set Person Variables to default!");
    UpdateGameInfo()
    AddLog("Update Game Info!");
    error.innerText = "Press a Button to Start!";
    AddLog("Start Mesaage set!");
    keysenabled = true;
    AddLog("Set Keys to enabled")
}

function Teilaufgabe_5() {
    document.getElementById('auto').disabled = true;
    document.getElementById('auto').innerText = "Running"
    AddLog("Button [id=auto] text was changed to Running")
    AddLog("=============AUTO MODE HAS STARTED=============")
    setTimeout(() => {
        BauerundSchaf() //left
        AddLog("Left was Pressed")
    }, 1000);
    setTimeout(() => {
        Bauer_Key() //up
        AddLog("Up was Pressed")
    }, 2000);
    setTimeout(() => {
        BauerundKohlkopf() //down
        AddLog("Down was Pressed")
    }, 3000);
    setTimeout(() => {
        BauerundSchaf() //left
        AddLog("Left was Pressed")
    }, 4000);
    setTimeout(() => {
        BauerundWolf() //right
        AddLog("Right was Pressed")
    }, 5000);
    setTimeout(() => {
        Bauer_Key() //up
        AddLog("Up was Pressed")
    }, 6000);
    setTimeout(() => {
        BauerundSchaf() //left
        AddLog("Left was Pressed")
        document.getElementById('auto').disabled = false;
        AddLog("Button [id=auto] was enabled")
        document.getElementById('auto').innerText = "Auto"
        AddLog("Button [id=auto] text was changed to Auto")
        AddLog("=============AUTO MODE HAS ENDED=============")
    }, 7000);
}

function BauerundSchaf() {
    if (Bauer.position != Schaf.position) {
        error.innerText = 'Der Bauer ist nicht beim Schaf';
        AddLog("Set Info")
    } else {
        if (Bauer.position == "right" && Schaf.position == "right") {
            Bauer.position = "left";
            Schaf.position = "left";
            Bauer.age = Bauer.age + 1;
            Schaf.age = Schaf.age + 1;
            AddLog("Persons Variables Updated")
            error.innerText = "";
            AddLog("Set Info")
            CheckLebewesen();
            UpdateGameInfo();
        } else {
            Bauer.position = "right";
            Schaf.position = "right";
            Bauer.age = Bauer.age + 1;
            Schaf.age = Schaf.age + 1;
            error.innerText = "";
            CheckLebewesen();
            UpdateGameInfo();
        }
    }
}

function BauerundWolf() {
    if (Bauer.position != Wolf.position) {
        error.innerText = 'Der Bauer ist nicht beim Wolf';
    } else {
        if (Bauer.position == "right" && Wolf.position == "right") {
            Bauer.position = "left";
            Wolf.position = "left";
            Bauer.age = Bauer.age + 1;
            Wolf.age = Wolf.age + 1;
            AddLog("Persons Variables Updated")
            error.innerText = "";
            AddLog("Set Info")
            CheckLebewesen();
            UpdateGameInfo();
        } else {
            Bauer.position = "right";
            Wolf.position = "right";
            Bauer.age = Bauer.age + 1;
            Wolf.age = Wolf.age + 1;
            AddLog("Persons Variables Updated")
            error.innerText = "";
            AddLog("Set Info")
            CheckLebewesen();
            UpdateGameInfo();
        }
    }
}

function BauerundKohlkopf() {
    if (Bauer.position != Kohlkopf.position) {
        error.innerText = 'Der Bauer ist nicht beim Kohlkopf';
    } else {
        if (Bauer.position == "right" && Kohlkopf.position == "right") {
            Bauer.position = "left";
            Kohlkopf.position = "left";
            Bauer.age = Bauer.age + 1;
            Kohlkopf.age = Kohlkopf.age + 1;
            AddLog("Persons Variables Updated")
            error.innerText = "";
            AddLog("Set Info")
            CheckLebewesen();
            UpdateGameInfo();
        } else {
            Bauer.position = "right";
            Kohlkopf.position = "right";
            Bauer.age = Bauer.age + 1;
            Kohlkopf.age = Kohlkopf.age + 1;
            AddLog("Persons Variables Updated")
            error.innerText = "";
            AddLog("Set Info")
            CheckLebewesen();
            UpdateGameInfo();
        }
    }
}

function Bauer_Key() {
    if (Bauer.position == "right" && Kohlkopf.position == "right") {
        Bauer.position = "left";
        Bauer.age = Bauer.age + 1;
        AddLog("Persons Variables Updated")
        error.innerText = "";
        AddLog("Set Info")
        CheckLebewesen();
        UpdateGameInfo();
    } else {
        Bauer.position = "right";
        Bauer.age = Bauer.age + 1;
        AddLog("Persons Variables Updated")
        error.innerText = "";
        AddLog("Set Info")
        CheckLebewesen();
        UpdateGameInfo();
    }
}


button_bauer_und_schaf.onclick = function () {
    if (keysenabled) {
        AddLog("Button Bauer & Schaf was Pressed")
        BauerundSchaf();
    }
}
button_bauer_und_wolf.onclick = function () {
    if (keysenabled) {
        AddLog("Button Bauer & Wolf was Pressed")
        BauerundWolf();
    }
}
button_bauer_und_kohlkopf.onclick = function () {
    if (keysenabled) {
        AddLog("Button Bauer & Kohlkopf was Pressed")
        BauerundKohlkopf();
    }
}
button_bauer.onclick = function () {
    if (keysenabled) {
        AddLog("Button Bauer was Pressed")
        Bauer_Key();
    }
}



window.addEventListener('keydown', function (event) {
    if (keysenabled) {
        if (event.keyCode == 37) {
            AddLog("Key ARROW LEFT was Pressed")
            //Bauer und Schaf
            BauerundSchaf();
        }
        if (event.keyCode == 39) {
            AddLog("Key ARROW RIGHT was Pressed")
            //Bauer und Wolf
            BauerundWolf();
        }
        if (event.keyCode == 40) {
            AddLog("Key ARROW DOWN was Pressed")
            //Bauer und Kohlkopf
            BauerundKohlkopf();
        }
        if (event.keyCode == 38) {
            AddLog("Key ARROW UP was Pressed")
            //Bauer alleine
            Bauer_Key();
        }
    }
});

function CheckLebewesen() {
    if (Wolf.position == Schaf.position && Bauer.position !== Schaf.position) {
        error.innerText = "Der Wolf hat das Schaf gefressen, da der Bauer nicht aufgepasst hat!";
        AddLog("Set Info")
        AddLog("Game Over Wolf & Schaf");
        keysenabled = false;
        AddLog("Keys was set to disabled");
    }
    if (Schaf.position == Kohlkopf.position && Bauer.position !== Kohlkopf.position) {
        error.innerText = "Das Schaf hat den Kohlkopf gefressen, da der Bauer nicht aufgepasst hat!";
        AddLog("Set Info")
        AddLog("Game Over Schaf & Kohlkopf");
        keysenabled = false;
        AddLog("Keys was set to disabled");
    }
    if (Wolf.position == "left" && Schaf.position == "left" && Kohlkopf.position == "left" && Bauer.position == "left") {
        error.innerText = "Alle Lebewesen wurden erfolgreich auf das andere Ufer gebracht";
        AddLog("Set Info")
        AddLog("Game Win :)");
        keysenabled = false;
        AddLog("Keys was set to disabled");
    }
    if (Wolf.age == maxage || Bauer.age == maxage || Kohlkopf.age == maxage || Schaf.age == maxage) {
        error.innerText = "Ein Lebewesen ist gestorben da es zu Alt geworden ist";
        AddLog("Set Info")
        AddLog("Game Over a Person was to old");
        keysenabled = false;
        AddLog("Keys was set to disabled");
    }
}

