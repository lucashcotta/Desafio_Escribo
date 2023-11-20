
function multiplos_3_5 (valor)
{
    lista_Valores = []
    sumMultiplos = 0

    for(let i = 0; i < valor; i++){     //For passando como tamanho o prório parametro valor para que seja armazenado no array de 0 a um numero anterior a valor.
        lista_Valores.push(i)           //Inserindo os valores anteriores a valor no array.
        if(lista_Valores[i] % 3 === 0 || lista_Valores[i] % 5 === 0 )  //Filtrando os multiplos de 3 e 5 dentro do array 
        {            
            sumMultiplos += lista_Valores[i]                            //Somando os valores e armazenando em uma variavel.
                       
        }   
    }
    return `Soma dos multiplos de 3 e 5 dos numeros presentes no array = ${sumMultiplos}`  //Retornando a variável.

}
console.log(multiplos_3_5(10))    

console.log(multiplos_3_5(11))