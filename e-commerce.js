const carrinho = {
    nomeDoCliente: 'Guido Bernal',
    produtos: [
        {
            id: 1,
            nome: 'camisa',
            qnt: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: 'Bermuda',
            qnt: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function(){

        let precoTotalItensTexto = `${this.calcularTotalAPagar() / 100}`; // transformar em reais
        
        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens.`);
        console.log(`Total a pagar: R$ ${precoTotalItensTexto}`);
    },
    addProduto: function (produto){
        let indiceProdutoExistente = -1;
    
        for (let i = 0; i < this.produtos.length; i++){
            if (this.produtos[i].id === produto.id){
                indiceProdutoExistente = i;
                break;
            }
        }
    
        if (indiceProdutoExistente === -1){
            this.produtos[this.produtos.length] = produto;
        }else{
            this.produtos[indiceProdutoExistente].qnt += produto.qnt;
        }
    },
    imprimirDetalhes: function(){
        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log('');

        let qntTotalDeItens = this.calcularTotalDeItens();
        let precoTotalItens = this.calcularTotalAPagar();

        for(let i = 0; i < this.produtos.length; i++){
            let produto = this.produtos[i];

            console.log(`Item: ${i +1} - ${produto.nome} - ${produto.qnt} und - R$ ${produto.precoUnit /100}`);
        }
        let precoTotalItensTexto = `${precoTotalItens}`;

        console.log('');
        console.log(`Total de itens: ${qntTotalDeItens} itens.`);
        console.log(`Total a pagar: R$ ${precoTotalItens/100}`);
    },
    calcularTotalDeItens: function(){
        let qntTotalDeItens = 0;
    
        for(const produto of this.produtos){
            qntTotalDeItens += produto.qnt;
        }
        return qntTotalDeItens;
    },
    calcularTotalAPagar: function(){
        let precoTotalItens = 0;
    
        for(const produto of this.produtos){
            precoTotalItens += produto.qnt * produto.precoUnit;
        }
        return precoTotalItens;
    },
    calcularDesconto: function(){
        let qntTotalDeItens = this.calcularTotalDeItens();
        let precoTotalItens = this.calcularTotalAPagar();

        let descontoPorItem = 0;
        let descontoPorTotal = 0;

        if(qntTotalDeItens > 4){
            descontoPorItem = this.produtos[0].precoUnit;
            for(let i = 1; i < this.produtos.length; i++){
                if(this.produtos[i].precoUnit < descontoPorItem){
                    descontoPorItem = this.produtos[i].precoUnit;
                }
            }
        }
        if(precoTotalItens > 10000){
            descontoPorTotal = precoTotalItens * 0.1;
        }
        return descontoPorItem > descontoPorTotal ? descontoPorItem : descontoPorTotal;
    }
}

console.log(carrinho.calcularDesconto()/100);

const novaBermuda = {
    id: 2,
    nome: 'Bermuda',
    qnt: 3,
    precoUnit: 5000,
}
carrinho.addProduto(novaBermuda);

const novoTenis = {
    id: 3,
    nome: 'Tenis',
    qnt: 1,
    precoUnit: 10000
}
carrinho.addProduto(novoTenis);

console.log(carrinho.calcularDesconto()/100);
carrinho.imprimirResumo();
carrinho.imprimirDetalhes();