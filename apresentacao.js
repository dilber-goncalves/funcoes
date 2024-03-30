const pessoa = {
    nome: "Dilber",
    idade: 28,
    profissao: "músico"
}

if (pessoa.idade < 25) {
    console.log(`Sou ${pessoa.nome}, sou um(a) jovem de ${pessoa.idade} anos e sou ${pessoa.profissao}`);
}else if (pessoa.idade < 65) {
    console.log(`Sou ${pessoa.nome}, sou um(a) adulto(a) de ${pessoa.idade} anos e sou ${pessoa.profissao}`);
}else{
    console.log(`Sou ${pessoa.nome}, sou um(a) idoso(a) de ${pessoa.idade} anos e sou ${pessoa.profissao}`);
}

const pessoa2 = {
    nome: "Pedro",
    idade: 65,
    profissao: "médico"
}

const pessoa3 = {
    nome: "Ana",
    idade: 19,
    profissao: "estudante"
}

