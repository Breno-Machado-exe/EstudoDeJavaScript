//--------------------------------------------------------------------

let titulo = document.querySelector('h1')
titulo.innerHTML = 'Manipular CSS'

//--------------------------------------------------------------------



//--------------------------------------------------------------------

// (setAttribute)
// altera uma propriedade daquela tag

let imagem = document.querySelector('#foto')
// agora a variavel imagem representa um objeto

imagem.setAttribute('src', 'cacholo.png')
imagem.setAttribute('width', '280px')
//setattribute tem 2 parametros. nome do atributo e valor

//-------------------------------------------------------------------



//-------------------------------------------------------------------


//  (Manipular CSS)


// (01 - Com o Style)

// propriedade style é uma das formas
document.querySelector('h1').style.color = "blue";
titulo.style.color = "orange" //é outra forma 
// titulo é a variávl que eu associei ao h1
//style é a propriedade que me permite alterar o CSS
//color é a propriedade que queremos modificar


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

