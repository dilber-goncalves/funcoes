const contaBancaria = {
    nome: 'Maria',
    saldo: 0,
    historicos: [],
    depositar: function (valor){
        this.saldo += valor;
        this.historicos[this.historicos.length] = {
            tipo: "Depósito",
            valor: valor,
        }
        console.log(`Deposito de R$ ${valor /100} realizado na conta de ${this.nome}.`);
    },
    sacar: function(valor){
        if (valor > this.saldo){
            console.log(`Saldo insuficiente para o saque!`);
            return;
        }
        this.saldo -= valor;
        this.historicos[this.historicos.length] = {
            tipo: "Saque",
            valor: valor,
        }
        console.log(`Saque de R$ ${valor /100} realizado na conta de ${this.nome}.`);
    },
    extrato: function (){
        console.log(`===Extrato de ${this.nome} ===`);
        console.log(`---Saldo: ${this.saldo/100}---`);
        console.log('Histórico:');
        for (const historico of this.historicos){
            console.log(`${historico.tipo} de R$ ${historico.valor/100}`);
        }
    }
}

contaBancaria.depositar(10000);
contaBancaria.sacar(50000);
contaBancaria.sacar(5000);
contaBancaria.extrato();