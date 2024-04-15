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
    imprimirResumo: function(carrinho){
        let qntTotalDeItens = 0;
        let precoTotalItens = 0;
    
        for(let produto of carrinho.produtos){
            qntTotalDeItens += produto.qnt;
            precoTotalItens += produto.qnt * produto.precoUnit;
        }
    
        let precoTotalItensTexto = `${precoTotalItens / 100}` // transformar em reais
    
        console.log(`Cliente: ${carrinho.nomeDoCliente}`);
        console.log(`Total de itens: ${qntTotalDeItens} itens.`);
        console.log(`Total a pagar: R$ ${precoTotalItensTexto}`);
    },
    addProduto: function (carrinho, produto){
        let indiceProdutoExistente = -1;
    
        for (let i = 0; i < carrinho.produtos.length; i++){
            if (carrinho.produtos[i].id === produto.id){
                indiceProdutoExistente = i;
                break;
            }
        }
    
        if (indiceProdutoExistente === -1){
            carrinho.produtos[carrinho.produtos.length] = produto;
        }else{
            carrinho.produtos[indiceProdutoExistente].qnt += produto.qnt;
        }
    }
}

const novaBermuda = {
    id: 2,
    nome: 'Bermuda',
    qnt: 3,
    precoUnit: 5000,
}

const novoTenis = {
    id: 3,
    nome: 'Tenis',
    qnt: 1,
    precoUnit: 10000
}

carrinho.addProduto(carrinho, novaBermuda);
carrinho.addProduto(carrinho, novoTenis);

carrinho.imprimirResumo(carrinho);