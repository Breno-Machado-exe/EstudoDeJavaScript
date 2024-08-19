//-----------------------------------------------------------------------

//              (preparações)

function carregou()
{
    console.log('pagina carregada com sucesso!')
}

function focou()
{
    console.log('foco no título')
}

function rolouPagina()
{
    console.log('pagina rolando')
}

function focoNoCampo()
{
    console.log('foco no campo de texto')
}

function semfocoNoCampo()
{
    // não tá pegando :(
    console.log('perdeu o foco')
}

let letras = document.querySelector('input[type=text]')

function avisarQueTeclou ()
{
    let numLetras = 1
    console.log('esta teclando' + ( letras.value.lenght + numLetras))
}

let botao1 = document.querySelector('#btn1')
let botao2 = document.querySelector('#btn2')
let botaoEnviar = document.querySelector('#btn3')

botao1.addEventListener('mouseover', function ()
{
    console.log('Foco no botão 1')
})

botao2.addEventListener('blur', function ()
{
    console.log('Foco no botão 2')
})

botaoEnviar.addEventListener('click', function(event)
{
    console.log('clicou no botão enviar')
})

//-----------------------------------------------------------------------