//-----------------------------------------------------------------------------

//              (atribuindo a constantes)

//é a primeira opção para se criar uma promise 

const minhaPromessa = new Promise((resolve,reject)=>{
    resolve("Deu certo")
    //chamada quando a operação assíncrona der certo
    reject("Deu errado")
    //chamada quando a operação der errado
})


// a constante vai receber a promessa para que possamos trabalhar com 
// seu resultado

//por costume usamos arrow funcion para simplificar sua sintaxe

// os parâmetros resolved e reject podem possuir outros nomes, mas por
// convenção nós sempre usamos esses.

// Conceito avançado: Esses dois parâmetros são funções embutidas 
// da API de promises


//then e catch

minhaPromessa
    .then((result)=>{
        console.log("resolvido, recebeu o " + result)
    })
    .catch((error)=>{
        console.log("resolvido, recebeu o " + error)
        
    })

//o catch só é chamado em duas ocasiões:
//quando reject for invocada e quando o código dentro de um then lança um erro


//then e catch também podem receber funções já existentes

//-----------------------------------------------------------------------------



//-----------------------------------------------------------------------------


//              (usa função externa)

//caso já exista uma função externa, tu pode criar uma promise em uma variável
//e fazer ele receber a função externa, mas ela deve ter 2 parâmetros, um para
//o resolve e outro para o reject


//-----------------------------------------------------------------------------



//-----------------------------------------------------------------------------

//              (encadear os then)

const myPromise = new Promise((resolve, reject) =>{

    //resolve e reject são os dois argumentos dela 
    const nome = "Breno"
    // vamos fingir que esse nome chegou de uma requisição externa

    if(nome === "Breno")
    {
        resolve('Usuário Breno encontrado!')
    } else 
    {
        reject('O usuário Breno não foi encontrado!')
        //envia mensaegem de erro
    }

})

//agora vamos usar o then para executar algo graças a promessa 
// e vamos encadear mais de um then

myPromise.then((data) =>{
    return data.toLowerCase()
    //vai passar todas as letras para caixa baixa
    //ou deveria, não está funcionando
}).then((data)=>{
    console.log(data)
})
//imprime com base no resultado do primeiro then da cadeia

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

//não está funcionando também

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