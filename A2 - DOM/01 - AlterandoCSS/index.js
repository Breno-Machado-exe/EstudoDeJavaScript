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


//                        (Manipular CSS)



//-------------------------------------------------------------------

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

//-------------------------------------------------------------------


//-------------------------------------------------------------------

// (02 - Com o setattribute)

//seleção de um só elemento de um conjunto
//eu tenho duas box mas vou mexer só com uma:
let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'azul') 
//azul é uma classe que tá lá no documento CSS


//qual a vantagem desse setattribute? 
//podemos mexer com quantas propriedades quisermos, só fazer uma classe
//lá no CSS

//como retirar o atributo que você adicionou?

// ( Remove Attribute )

box[0].removeAttribute('class')

//problema = remove das outras classes


//-------------------------------------------------------------------



//-------------------------------------------------------------------


// (adicionar classe)  | melhor opção

// um monte de coisa que ainda verei:


let tela = document.querySelector('main')
//tela agora está relacionada a tela principal  

let btnDark = document.querySelector('#btdark')

let btnLight = document.querySelector('#btlight')
//variáveis que estão relacionadas aos botões com id no HTML



btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)
//ouvintes que vão chamar funções quando um click ocorrer relacionado ao botão


function modoDark()
{
    console.log('modo dark')
    tela.classList.add("dark");
    //acessa a lista de classes da variável tela (que está relacionada à tela main)
    //e adiciona a classe dark
    tela.classList.remove("light");
    // faz quase o mesmo do de cima, só que tira a classe light
}


function modoLight ()
{
    console.log('modo light')
    tela.classList.add("light");
    tela.classList.remove("dark");
}
// contrário da função anterior

// as classes light e dark que estão no CSS que irão alterar a página



//-------------------------------------------------------------------




//-------------------------------------------------------------------


// (Recomendação)


// criar classes no CSS que alteram o estilo
// utilizar o classList.add e classList.remove para alterar coisas com CSS
// quando for uma alteração pontual, utilizar o .style


//-------------------------------------------------------------------
