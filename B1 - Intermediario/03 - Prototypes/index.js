//---------------------------------------------------------------------------------

//nosso objeto que vai servir de pai
const animal =
{
    som:'um som de animal',
    tipo: 'animal',
    emitirSom: function()
    {
        console.log(this.som)
    }
}

//nosso objeto que vai servir como filho
const gato = 
{
    som: 'miau',
    tipo: 'gato'
}

Object.setPrototypeOf(gato,animal)
//fazendo a relação entre os objetos
//gato vira filho de animal


//é uma emulação de herança
//o animal se torna o "pai" de gato 
gato.emitirSom()
//gato não tem esse método, mas ele vai em animal e procura esse método
//ele vai usar o emitirSom do animal, onde o this vai apontar pro gato
//se ele não encontrar a propriedade som no gato, ele pega a do proprio animal
// ele imprimiria "um som de animal"
// mas setamos o miado para som do gato
//então o gato usa o método do animal, que aponta para si e usa o som de gato 
const gatoRaivoso = 
{
    tipo: 'gatoRaivoso',
    miarforte: function()
    {
        console.log(this.som.toUpperCase())
    }
}
Object.setPrototypeOf(gatoRaivoso,gato)
gatoRaivoso.miarforte()
//ele não tem a propriedade som, então ele puxou do pai, que é o gato


//para sabermos qual é o protótipo de um objeto
Object.getPrototypeOf(gato)
console.log(Object.getPrototypeOf(gato)) //usei pra me mostrar no console


//---------------------------------------------------------------------------------