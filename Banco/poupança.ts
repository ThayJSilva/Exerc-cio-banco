export {poupança}

import {Banco} from "./Banco";
import {banco} from "./Banco";

class poupança {
    mostrarDados(){
        console.log(`
        Nome: ${banco.nomeCliente}
        Saldo poupança: R$${banco.sPoupança}`)
    }
}
var cc = new poupança();
cc.mostrarDados();
