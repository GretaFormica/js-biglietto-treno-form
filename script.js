// dichiarazione costanti e variabili
const Km = parseInt(prompt('Quanti kilometri devi percorrere?'));
const Anni = parseInt(prompt('Quanti anni hai?'));
const PrezzoBase = Km * 0.21;
let Prezzo

//istruzioni condizionali
if(Anni < 18){

    Prezzo = (PrezzoBase * 20 / 100);

} else if(Anni > 65){
    
    Prezzo = (PrezzoBase * 40 / 100);

} else {

    Prezzo = PrezzoBase;

}

//arrotondamento
Prezzo = Prezzo.toFixed(2);
console.log(Prezzo);

//output

document.getElementById('h1').innerHTML= `Il prezzo totale per il tuo viaggio è di ${Prezzo} euro`;