//dichiarazioni costanti e variabili
const UserName = document.getElementById('name').value;
const Km = parseInt(document.getElementById('km').value);
const Anni = documenti.getElementById('anni').value;
const PrezzoBase = Km * 0.21;
let Prezzo

//istruzioni condizionali

if(!isNaN(Km)){

    if(Anni == "Minorenne"){

        Prezzo = (PrezzoBase * 20 / 100);
    
    } else if(Anni == "Anziano"){
        
        Prezzo = (PrezzoBase * 40 / 100);
    
    } else {
    
        Prezzo = PrezzoBase;
    
    }

} else{
    alert('valore dei km non valido: inserire un numero')
}

//arrotondamento
Prezzo = Prezzo.toFixed(2);
console.log(Prezzo);

//output

//document.getElementById('h1').innerHTML= `Il prezzo totale per il tuo viaggio è di ${Prezzo} euro`;
