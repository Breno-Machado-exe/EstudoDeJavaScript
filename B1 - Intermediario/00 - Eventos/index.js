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
    //nesse caso não temos textContent, pq não é texto. Temos valor, então usamos value
}

let botao1 = document.querySelector('#btn1')
let botao2 = document.querySelector('#btn2')
let botaoEnviar = document.querySelector('#btn3')

botao1.addEventListener('mouseover', function ()
{
    //percebe que ta só mouseover e não onmouseover
    //isso pq está num ouvinte, então não precisa do on
    console.log('Foco no botão 1')
})

botao2.addEventListener('blur', function ()
{
    // onblur é quando perdemos o foco em um elemento
    console.log('Foco no botão 2')
})

botaoEnviar.addEventListener('click', function(event)
{
    //se tiver só o console,log, ao apertar em enviar a página vai dar um refresh
    //pq é um elemento do type submit
    //para evitar:
    event.preventDefault()
    console.log('clicou no botão enviar')
})

//-----------------------------------------------------------------------