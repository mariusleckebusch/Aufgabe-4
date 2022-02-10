const input = require('input')

async function Prompt() {
    const object = await input.checkboxes(`Choose 2 Objects`, ['Bauer', 'Wolf', 'Schaf', 'Kohlkopf']);
    if(object.length > 2) {
        console.log("Falsch: Es Passen Maximal 2 Leute auf das Boot")
        return;
    }
    if(object.length < 2) {
        console.log("Falsch: Es müssen Minimal 2 Leute auf das Boot")
        return;
    }
    if(object.includes("Bauer") && object.includes("Schaf")) {
        console.log("Richtig: Alle haben überlebt")
        return;
    }
    if(object.includes("Schaf") && object.includes("Wolf") || object.includes("Schaf") && object.includes("Kohlkopf")) {
        console.log("Falsch: Einer ist gestorben")
        return;
    }
  }
   
  Prompt();

//Als Erstes muss der Bauer mit dem Kohlkopf fahren
//Als Zweites muss der Bauer mit dem Wolf fahren
//Als Drittes muss der Bauer mit dem Schaf fahren