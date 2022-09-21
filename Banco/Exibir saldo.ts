export {saldo}

import {Banco} from "./Banco";
import {banco} from "./Banco";

class saldo {
    mostrarDados(){
        console.log(`
        Nome: ${banco.nomeCliente}
        Saldo total: R$${banco.sTotal}`)
    }
}
var cc = new saldo();

cc.mostrarDados();