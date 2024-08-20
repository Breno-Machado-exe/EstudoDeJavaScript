//------------------------------------------------------------------------

// https:jsonplaceholder.typicode.com/users/${id}

//url que vamos usar no fetch
//o fetch é uma função do js 
//ela é onde vamos buscar informações de usuários


const getUserInfo = (id) =>{
    const data = fetch( 'https://jsonplaceholder.typicode.com/users/${id}')
    console.log(data)
}

getUserInfo(1)


//a chamada da função da constante getuserinfo vai retornar uma promessa
//a promessa é um retorno de que naquela linha vai ter alguma coisa, mas 
//ele ainda n sabe seu resultado

//como eu quero imprimir o que a const data recebeu, eu preciso que ela
//receba alguma coisa, o que não está ocorrendo

//para resolver isso com o que aprendemos na pasta passada, usariamos o
//then para usar o resultado da promessa

//------------------------------------------------------------------------