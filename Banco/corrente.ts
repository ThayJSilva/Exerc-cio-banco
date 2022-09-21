export {Corrente}

import {Banco} from "./Banco";
import {banco} from "./Banco";

class Corrente {
    mostrarDados(){
        console.log(`
        Nome: ${banco.nomeCliente}
        Saldo corrente: R$${banco.sCorrente}`)
    }
}
var cc = new Corrente();
cc.mostrarDados();