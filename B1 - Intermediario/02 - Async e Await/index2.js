//------------------------------------------------------------------------

// (utilizando o then)


const getUserInfo = (id) =>{
    const data = fetch( 'https://jsonplaceholder.typicode.com/users/${id}')
    .then((response)=>{
        //no caso do fetch, ainda não temos a resposta em dado
        return response.json()
        //esse 2 then se tornou outra promessa
    })
    .then((data)=>{
        console.log(data)
        //agora temos o dado 
    })

}

getUserInfo(1)

//resultado: código confuso, com 2 thens pra conseguir usar 1 dado
//existem casos piores em que seriam necessários vários then e catchs

//------------------------------------------------------------------------