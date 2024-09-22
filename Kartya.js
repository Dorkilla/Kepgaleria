export default class Kartya {
    #kepAdat = {};
    #szuloElem;

    constructor(adat, szuloElem) {
        this.#kepAdat = [adat];  
        this.#szuloElem = szuloElem;
        this.kepadatKiir(this.#kepAdat); 

        this.gombElem = document.querySelectorAll(".tartalom");
        this.gombKattint()
    }

    kepadatKiir(lista) {
        let txt = "";
        for (let index = 0; index < lista.length; index++) {
            txt += `<div class="kep"> 
                    <img src="${lista[index].kep}" alt="${lista[index].cim}">
                </div>`;
        }
        this.#szuloElem.innerHTML = txt;
    }
    gombKattint() {
        this.gombElem.addEventListener("click", () => {
            const e = new CustomEvent("kivalaszt", { detail: this.#kepAdat });
            window.dispatchEvent(e);
        });
    }
}