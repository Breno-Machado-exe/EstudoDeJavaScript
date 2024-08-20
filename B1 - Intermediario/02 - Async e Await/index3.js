//-----------------------------------------------------------------------

//              (agora sim asyng e await)

const getUserInfo = async (id) =>{
    //o async vem antes da função e torna ela assíncrona
    //agora ela vai retornar uma promessa, mesmo sem uma requisição dentro
    const response = await fetch( 'https://jsonplaceholder.typicode.com/users/${id}')
    //agora o código vai ter que esperar a promessa retornar uma resposta
    const data = response.json()
    //usando uma variável para receber a resposta, tranformamos a resposta
    //em um dado usando esse .json e atribuimos a uma variável 
    console.log(data)
    //agora sim podemos usar o dado

}

getUserInfo(1)

//------------------------------------------------------------------------