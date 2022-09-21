export {banco}
export class Banco{
nomeBanco: string
nomeCliente: string
sCorrente: number
sPoupança: number
sTotal: number
sInvestimento: number
ativo: boolean
extrato: number
}
 var banco = new Banco;
 banco.nomeBanco = "Bradesco"
 banco.nomeCliente = "Taiana"
 banco.sCorrente = 3000
 banco.sPoupança = 10000
 banco.sTotal = banco.sCorrente + banco.sPoupança
 banco.sInvestimento = 6000 
 banco.extrato = banco.sInvestimento + banco.sPoupança
 banco.ativo = true

{}




    