
// documento linkado no html da pasta 05 - funções

//-----------------------------------------------------------------------

//              (Preparações)

let titulo2 = document.querySelector('h1')
titulo.innerHTML = "Funções no JS"
let box2 = document.querySelectorAll('box')
                
                
                
//-----------------------------------------------------------------------



//-----------------------------------------------------------------------

//              (função anônima)

titulo2.addEventListener('click', function()
{
    console.log('clicou no título')
})

// o segundo parâmetro é uma função sem nome (mas pode ter nome)
// pode ser só o nome de uma função
// os parenteses da função ficam ao lado dela
// se tivesse parâmetros nós passariamos eles
// abre a função dentro dos parenteses do ouvinte

//quando usamos essa função anônima?
//quando precisamos passar uma função como parâmetro

//outro exemplo

const produto = function(a,b) {
    return a * b;
}

// funções como valores:
let operação = produto;
operação(2,3)

// não são içadas, então tu deve criar a função antes de atribuir elas a
// alguma variável
//-----------------------------------------------------------------------



//-----------------------------------------------------------------------

//              (função arrow)

//muito recente, surgiu em 2015

//estrutura:
// é uma função sem nome e sem a palavra reservada funcion

//criamos uma constante (convenção) ou uma variável

//esse cons olaMundoArraw é uma constante que recebe a arrow function
const olaMundoArrow = () => document.write("Oia a flecha")
//chaves são um elemento opcional se tiver 1 só operação:

/*
    const olaMundoArrow = () => {
        document.write("Oia a flecha")
    }
*/

//eu sempre vou usar chaves então?
//não pq eu tentei com chaves e não deu certo* , da dando undefined

//não precisa de return também
//não são içadas 
//não subscrevem a referência this* 


olaMundoArrow()

const olaMundoArrow2 = () => '<p>Olá mundo com arrow funcion</p>'

    

olaMundoArrow2() // não funcionou assim, pq não possui comando de saída
document.write(olaMundoArrow2()) 

//-----------------------------------------------------------------------