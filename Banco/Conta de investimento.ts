export {investimento}

import {Banco} from "./Banco";
import {banco} from "./Banco";

class investimento {
    mostrarDados(){
        console.log(`
        Nome: ${banco.nomeCliente}
        Saldo investimento: R$${banco.sInvestimento}`)
    }
}
var cc = new investimento();

cc.mostrarDados();
