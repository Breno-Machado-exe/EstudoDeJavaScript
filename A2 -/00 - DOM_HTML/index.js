
//-----------------------------------------------------------------------
//.querySelector
let titulo = document.querySelector('#titulo')
//seleciona um elemento com base na tag, #id, ou .class
//o problema é que só vai selecionar o primeiro do tipo

//selecionando uma tag
let titulo00 = document.querySelector('h1')

//selecionando por id
let titulo01 = document.querySelector('#titulo')

//selecionando classe
let titulo02 = document.querySelector('.box')

//para selecionar todos os elementos do tipo
let titulos = document.querySelectorAll('h2')
// o resultado desse selector wall é uma lista, portanto um array
// podemos acessar cada elemento
document.write(titulos[0].textContent) //esse textcontent vemos abaixo:
titulos[2].textContent = 'texto qualquer'
//-----------------------------------------------------------------------


//-----------------------------------------------------------------------
//propriedade .textContent
titulo.textContent 
//mostra no log o conteúdo da variável título
//podemos alterar o conteúdo inclusive
titulo.textContent = 'DOM'

titulo.innerHTML //faz a mesma coisa
//-----------------------------------------------------------------------


//-----------------------------------------------------------------------
// Existem outros métodos, mas a preferência é o querySelector

let testeTag = document.getElementsByTagName('div')
//pega todas as tags

let testeId = document.getElementById('titulos')
//todos os ids

let testeClass = document.getElementsByClassName('box')
//todas as classes
