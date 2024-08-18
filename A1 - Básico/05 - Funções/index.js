
//-----------------------------------------------------------------------

                //(Preparações)

let titulo = document.querySelector('h1')
titulo.innerHTML = "Funções no JS"
let box = document.querySelectorAll('box')



//-----------------------------------------------------------------------



//-----------------------------------------------------------------------

                //(funções)

// Procedimento 
function olaMundo()
{
    document.write('Olá mundo sem retorno<br>')
}

//função
function olaMundo2()
{
    return document.write('Olá mundo com retorno<br>')
}

                //(no momento eu só declarei elas)
                //(chamada das funções)

olaMundo()
olaMundo2() //não era pra funcionar, era pra ser dessa forma:
//document.write(olaMundo2())

//a com retorno só faz algo se for o resultado de uma operação
//isso por que ela não tem o comando de escrita, ela até tem, mas ele é
//um retorno

//a sem retorno só tem o comando de retorno, então não precisa de nada

                //(funções com parâmetros)

let x = 3;
let y = 2;

function somar(a, b)
{
    document.write( a + b + "<br>")
}

somar(x,y)
somar(10,10)

function somar2(c,d)
{
    return c + d
}

document.write(somar2(x,y))
document.write(`<p> ${somar2(10,6)}</p>`)
//precisa da interpolação:
document.write(`<p> somar2(10,6) </p>`)

//-----------------------------------------------------------------------
