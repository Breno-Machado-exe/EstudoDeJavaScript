//----------------------------------------------------------------------

// tarefa custosa: 
//vai fazer o programa ter uma demora na resposta

console.log('tarefa 1')

console.log('tarefa 2: inicio')

for ( let i = 0 ; i< 4 ; i++)
{}

console.log('tarefa 2: fim')
console.log('tarefa 3') 

//----------------------------------------------------------------------



//----------------------------------------------------------------------

console.log('tarefa 1')

/*  Não está funcionando:

mas faria a ordem de execução mudar, já que a tarefa 2 iria pro web api
dai a 3 seria resolvida antes da 2

setImmediate(() => {
    console.log('tarefa 2: inicio')

        for ( let i = 0 ; i< 4 ; i++)
        {}

    console.log('tarefa 2: fim')
})

caso a 3 precisasse ser executada depois da 2, era só fazer a 3 ser um
callback no final da 2 

ou também podemos usar ambas com setImmediate, por que iriam para a 
task queue, que funciona por fila

*/

console.log('tarefa 3') 


//----------------------------------------------------------------------