//---------------------------------------------------------------------

//              (aplicação visual)

console.log('Tarefa 1') 
//é uma tarefa sincrona // é executada junto com o programa
//é uma task // código bloqueante // vai pra call task

queueMicrotask(() =>{
    console.log('Tarefa 2')
})
//é uma tarefa assíncrona // é executada em paralelo
//é uma microtask // não bloquenate // vai para Web API
//Depois de ir pra web API, a arrow function vai para Microtask queue
//Espera a call stack esvaziar

setTimeout(()=>{
    console.log('Tarefa 3')
}, 0)
//é uma tarefa assíncrona //é executada em paralelo
//é uma macrotask* //não bloqueante// vai pra web API
//Sua arrow funcition vai para a Task queue depois 
//Espera a call stack estar vazia e as microtasks terem sido chamadas

setTimeout(()=>{
    console.log('Tarefa 4')
}, 2000)
//é uma tarefa assíncrona //é executada em paralelo
//é uma macrotask* //não bloqueante// vai pra web API
//Sua arrow funcition vai para a Task queue depois 
//Espera a call stack estar vazia e as microtasks terem sido chamadas
//Seu tempo é maior que a da tarefa 3, então sua arrow vai depois

console.log('Tarefa 5')
//é uma tarefa sincrona // é executada junto com o programa
//é uma task // código bloqueante // vai pra call task

Promise.resolve(true).then(()=>{
    console.log('Tarefa 6')
})
//é uma tarefa assíncrona // é executada em paralelo
//é uma microtask por vir de uma promise //não bloqueante
// vai para Web API
//Depois de ir pra web API, a arrow function vai para Microtask queue
//Espera a call stack esvaziar
