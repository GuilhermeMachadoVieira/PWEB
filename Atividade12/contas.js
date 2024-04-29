class Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo) {
        this.nomeCorrentista = nomeCorrentista;
        this.banco = banco;
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }

    getNomeCorrentista() {
        return this.nomeCorrentista;
    }

    setNomeCorrentista(nomeCorrentista) {
        this.nomeCorrentista = nomeCorrentista;
    }

    getBanco() {
        return this.banco;
    }

    setBanco(banco) {
        this.banco = banco;
    }

    getNumeroConta() {
        return this.numeroConta;
    }

    setNumeroConta(numeroConta) {
        this.numeroConta = numeroConta;
    }

    getSaldo() {
        return this.saldo;
    }

    setSaldo(saldo) {
        this.saldo = saldo;
    }
}

class Corrente extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldoEspecial) {
        super(nomeCorrentista, banco, numeroConta);
        this.saldoEspecial = saldoEspecial;
    }

    getSaldoEspecial() {
        return this.saldoEspecial;
    }

    setSaldoEspecial(saldoEspecial) {
        this.saldoEspecial = saldoEspecial;
    }
}

class Poupanca extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, juros, dataVencimento) {
        super(nomeCorrentista, banco, numeroConta);
        this.juros = juros;
        this.dataVencimento = dataVencimento;
    }

    getJuros() {
        return this.juros;
    }

    setJuros(juros) {
        this.juros = juros;
    }

    getDataVencimento() {
        return this.dataVencimento;
    }

    setDataVencimento(dataVencimento) {
        this.dataVencimento = dataVencimento;
    }
}

let corrente = new Corrente();
corrente.setNomeCorrentista(prompt("Digite o nome do correntista da conta corrente:"));
corrente.setBanco(prompt("Digite o nome do banco da conta corrente:"));
corrente.setNumeroConta(prompt("Digite o número da conta corrente:"));
corrente.setSaldo(prompt("Digite o saldo da conta corrente:"));
corrente.setSaldoEspecial(prompt("Digite o saldo especial da conta corrente:"));

let poupanca = new Poupanca();
poupanca.setNomeCorrentista(prompt("Digite o nome do correntista da conta poupança:"));
poupanca.setBanco(prompt("Digite o nome do banco da conta poupança:"));
poupanca.setNumeroConta(prompt("Digite o número da conta poupança:"));
poupanca.setSaldo(prompt("Digite o saldo da conta poupança:"));
poupanca.setJuros(prompt("Digite o juros da conta poupança:"));
poupanca.setDataVencimento(prompt("Digite a data de vencimento da conta poupança:"));

console.log("Conta Corrente:");
console.log("Nome do Correntista:", corrente.getNomeCorrentista());
console.log("Banco:", corrente.getBanco());
console.log("Número da Conta:", corrente.getNumeroConta());
console.log("Saldo:", corrente.getSaldo());
console.log("Saldo Especial:", corrente.getSaldoEspecial());

console.log("\nConta Poupança:");
console.log("Nome do Correntista:", poupanca.getNomeCorrentista());
console.log("Banco:", poupanca.getBanco());
console.log("Número da Conta:", poupanca.getNumeroConta());
console.log("Saldo:", poupanca.getSaldo());
console.log("Juros:", poupanca.getJuros());
console.log("Data de Vencimento:", poupanca.getDataVencimento());
