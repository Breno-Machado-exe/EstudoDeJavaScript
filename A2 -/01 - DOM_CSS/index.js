let titulo = document.querySelector('h1')
titulo.innerHTML = 'Manipular CSS'

//--------------------------------------------------------------------

// Como alterar uma propriedade de uma tag

let imagem = document.querySelector('#foto')
imagem.setAttribute('src', 'cacholo.png')
//setattribute tem 2 parametros. nome do atributo e valor

//-------------------------------------------------------------------


//-------------------------------------------------------------------

// Manipular CSS
// propriedade style é uma das formas
document.querySelector('h1').style.color = "blue";
titulo.style.color = "orange" //é outra forma 
//mas só pq la em cima eu associei titulo ao h1

//se a propriedade tiver nome composto
//ex o background-color
//Substitui o traço pela primeira letra maiuscula
titulo.style.backgroundColor = "black"
titulo.style.borderBottom = "5px solid red"
titulo.style.padding = "0.625rem"
titulo.style.borderRadius = "10px"
//abordagem interessante para poucas propriedades para alterar


//seleção de um só elemento de um conjunto
//eu tenho duas box mas vou mexer só com uma:
let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'azul') 
//azul é uma classe que tá lá no documento CSS

//qual a vantagem desse setattribute? 
//podemos mexer com quantas propriedades quisermos, só fazer uma classe
//lá no CSS

// (rever e continuar o estudo)

