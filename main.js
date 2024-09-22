import { KEPEKLISTA } from "./adat.js";
import Jatekter from "./Jatekter.js";

const tartalomELEM = document.querySelector(".tartalom");
new Jatekter(KEPEKLISTA, tartalomELEM);

const kivkepekLista = [];

$(window).on("kivalaszt", (event) => {
    console.log(event.detail);
    kivkepekLista.push(event.detail);
    console.log(kivkepekLista);
    new Kartya(event.detail, tartalomELEM);
});

const JOBBGOMB = document.querySelector(".jobb");
const BALGOMB = document.querySelector(".bal");
const NAGYKEP = document.querySelector(".nagykep img");

let aktindex = 0;
JOBBGOMB.addEventListener("click", function () {
  aktindex = (aktindex + 1) % KEPEKLISTA.length;
  NAGYKEP.src = KEPEKLISTA[aktindex].kep;
});

BALGOMB.addEventListener("click", function () {
  aktindex = (aktindex - 1 + KEPEKLISTA.length) % KEPEKLISTA.length;
  NAGYKEP.src = KEPEKLISTA[aktindex].kep;
});