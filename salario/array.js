import entradaDados from 'readline-sync';

var contador = 0;

console.log ("Escolha uma das alternativas: \n");

console.log("1 - Listar os salários minímos de 2010 à 2020 \n");
console.log("2 - Listar o índice IPCA de 2010 à 2020 \n");
console.log("3 - Comparação entre percentual de aumento salarial e o IPCA \n");

var salario = [
    {ano: 2010, salario: 510},
    {ano: 2011, salario: 545},
    {ano: 2012, salario: 622},
    {ano: 2013, salario: 678},
    {ano: 2014, salario: 724},
    {ano: 2015, salario: 788},
    {ano: 2016, salario: 880},
    {ano: 2017, salario: 937},
    {ano: 2018, salario: 954},
    {ano: 2019, salario: 998},
    {ano: 2020, salario: 1045}
]

const inflação = [
    {ano: 2010, ipca: 5.91},
    {ano: 2011, ipca: 6.50},
    {ano: 2012, ipca: 5.84},
    {ano: 2013, ipca: 5.91},
    {ano: 2014, ipca: 6.41},
    {ano: 2015, ipca: 10.67},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 2.95},
    {ano: 2018, ipca: 3.75},
    {ano: 2019, ipca: 4.31},
    {ano: 2020, ipca: 4.52}
]


var escolha = entradaDados.question('Digite o numero da sua escolha: ');

if (escolha == 1){
    console.log("Listando salários minímos de 2010 à 2020:");
    while (contador < salario.length){
        console.log("Ano: ............................. " + salario[contador].ano );
        console.log("Salário:........................ R$" + salario[contador].salario +",00" );
        console.log("\n");
        contador++;
    }

}else if (escolha == 2){
    console.log("Listando Inflação IPCA 2010 à 2020:");
    while (contador < inflação.length){
        console.log("Ano: ............................. " + inflação[contador].ano );
        console.log("Inflação IPCA:................... " + inflação[contador].ipca +"%"  );
        console.log("\n");
        contador++;
    }
}else if (escolha ==3){
    console.log("Comparação entre percentual de aumento salarial e o IPCA:");
    while (contador < salario.length){
        console.log("Ano: ............................. " + salario[contador].ano );
        console.log("Salário:........................ R$" + salario[contador].salario +",00" );
        console.log("Percentual de aumento salarial:..... " + ((salario[contador].salario / salario[0].salario) - 1) * 100 + "%" );
        console.log("Inflação IPCA:................... " + inflação[contador].ipca +"%"  );
        console.log("\n");
        contador++;
    }
}
export default inflação;