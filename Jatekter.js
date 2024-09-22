import Kartya from "./Kartya.js";

export default class Jatekter{
    #lista=[];
    #szuloElem;
    constructor(lista, szuloElem){
        this.#lista=lista
        this.#szuloElem=szuloElem
        this.kepadatKiir()
    }

    kepadatKiir(){
        this.#lista.forEach(elem => {
            new Kartya(elem, this.#szuloElem); 
        });
    }
}