//----------------------------------------------------------------------

//              (criação de promessas)

//precisamos a associar a primise a uma variável ou constante
//para poder usá-la

//Usando arrow function para simplificar a sintaxe:
const myPromise = new Promise((resolve, reject) =>{

    //resolve e reject são os dois argumentos dela 
    const nome = "Breno"
    // vamos fingir que esse nome chegou de uma requisição externa

    if(nome === Breno)
    {
        resolve('Usuário Breno encontrado!')
    } else 
    {
        reject('O usuário Breno não foi encontrado!')
        //envia mensaegem de erro
    }

})

//agora vamos usar o then para executar algo graças a promessa
myPromise.then((data) =>{
    console.log(data)
} )

//              (encadear o then)

myPromise.then((data) =>{
    return data.toLowerCase()
    //vai passar todas as letras para caixa baixa
}).then((stringModificada)=>{
    console.log(stringModificada)
})
//imprime com base no resultado do primeiro then da cadeia

//----------------------------------------------------------------------



//----------------------------------------------------------------------

//              (tratar melhor a resposta do reject)

const myPromise2 = new Promise((resolve, reject) =>{

    //resolve e reject são os dois argumentos dela 
    const nome = "Carlos"
    // vamos fingir que esse nome chegou de uma requisição externa

    if(nome === Breno)
    {
        resolve('Usuário Breno encontrado!')
    } else 
    {
        reject('O usuário Breno não foi encontrado!')
        //envia mensaegem de erro
    }

})

//vai dar reject

myPromise2.then((data)=>{
    console.log(data)
}).catch((err) =>{
    //método catch trata o que é recebido de erro
    console.log('Aconteceu um erro: ' + err)
})


//----------------------------------------------------------------------



//----------------------------------------------------------------------

//              (resolver várias promises com all)


const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('P1 ok! Timeout')
    },2000)
    //emulando uma demora de resposta para fins didáticos
})
const p2 = new Promise((resolve,reject)=>{
    resolve('P2 ok!')
})
const p3 = new Promise((resolve,reject)=>{
    resolve('P3 ok!')
})

const resolveAll = Promise.all([p1,p2,p3]).then((data)=>{
    console.log(data)
})

//todas as respostas vem juntas, o método all prega que todas as promessas
//tem que estar resolvidas para ele ser executado



//              (resolver várias promises com o race)

// a primeira a ser resolvida envia retorno


const p4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('P4 ok! Timeout')
    },2000)
    //emulando uma demora de resposta para fins didáticos
})
const p5 = new Promise((resolve,reject)=>{
    resolve('P5 ok!')
})
const p6 = new Promise((resolve,reject)=>{
    resolve('P6 ok!')
})

const resolveAllRace = Promise.race([p1,p2,p3]).then((data)=>{
    console.log(data)
})


//----------------------------------------------------------------------



//----------------------------------------------------------------------

// (promessas como retorno de função)

function fezTarefa2()
{
    return new Promise((resolve,reject)=>{
        setImmediate(()=>{
            resolve("Tarefa 2")
        })
    })
}

console.log("Tarefa 1")
fezTarefa2()
    .then((valor)=>{
        console.log(valor)
    })
    .then(()=>{
        console.log("Tarefa 3")
    })


//----------------------------------------------------------------------