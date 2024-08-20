//-----------------------------------------------------------------------

//              (pegando dados da função assincrona)


const getUserInfo = async (id) =>{
 
    try
    {
        const response = await fetch( 'https://jsonplaceholder.typicode.com/users/${id}')
        const data = response.json()
        return data
    } catch (err) {
        console.error(err)
    }

}

const userData = getUserInfo(1)
//esse getuserinfo vai ser uma promessa, pq funções assincronas retornam promessas

//podemos pegar com o then, porem é uma forma ruim
//a forma que o cara fez eu acho que não é pra eu saber por enquanto...

//------------------------------------------------------------------------