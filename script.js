//btn
const Genera = document.getElementById('BtnGenera');

//istruzioni condizionali

Genera.addEventListener(
    'click',
    
    function() {
        
        //dichiarazioni costanti e variabili
        const UserName = document.getElementById('name').value;
        const Km = parseInt(document.getElementById('km').value);
        const Anni = document.getElementById('anni').value;
        const PrezzoBase = Km * 0.21;
        let Prezzo;

        if(!isNaN(Km)){

            if(Anni == "Minorenne"){
        
                Prezzo = (PrezzoBase * .2);
            
            } else if(Anni == "Anziano"){
                
                Prezzo = (PrezzoBase * .4);
            
            } else {
            
                Prezzo = PrezzoBase;
            
            }
        
        } else{
            alert('valore dei km non valido: inserire un numero')
        }

        //arrotondamento
        Prezzo = Prezzo.toFixed(2);

        //output
        document.getElementById('h2').innerHTML= `Il prezzo totale per il tuo viaggio è di ${Prezzo} euro`;

    }
)

