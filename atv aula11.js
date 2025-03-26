class ContaBancaria {
    constructor(titular, saldoInicial, numeroConta) {
        this.titular = titular;              
        this.saldo = saldoInicial;           
        this.numeroConta = numeroConta;      
        this.extrato = [];                   
    }

  
    depositar(valor) {
        this.saldo += valor;
        this.extrato.push({                  
            tipo: "Depósito",
            valor: valor,
            data: new Date().toLocaleString()  
        });
        console.log(`Depósito de R$${valor} realizado para ${this.titular}.`);
    }
}