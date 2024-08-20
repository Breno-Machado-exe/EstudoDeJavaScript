//-----------------------------------------------------------------------

//              (tratamento de dados)

//usa o try catch

const getUserInfo = async (id) =>{
 
    try
    {
        const response = await fetch( 'https://jsonplaceholder.typicode.com/users/${id}')
        const data = response.json()
        console.log(data)
    } catch (err) {
        console.error(err)
    }

}

getUserInfo(1)

//------------------------------------------------------------------------