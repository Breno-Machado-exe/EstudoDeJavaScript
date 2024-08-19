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


//              (retorno de constantes que receberam uma função)

const pegaretorno = () =>{
    return new Promise ((resolve,reject)=>{

    })
}


//              (usa função externa)

//caso já exista uma função externa, tu pode criar uma promise em uma variável
//e fazer ele receber a função externa, mas ela deve ter 2 parâmetros, um para
//o resolve e outro para o reject


//-----------------------------------------------------------------------------
