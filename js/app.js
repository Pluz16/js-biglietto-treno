console.log('works!')

let firstName, km, anni

// 1. chiedere il nome
firstName = prompt('Ciao! come ti chiami?')
console.log(firstName)

//2. Km da percorrere
km = prompt('Bel nome! Quanti km vuoi percorrere?')
km = parseFloat(km)
console.log(km)

//3. Anni dell'utente
anni = prompt('Quanti anni hai?')
anni = parseFloat(anni)
console.log(anni)

//4. Prezzo al km
const base = 0.21 
console.log('Il prezzo al km è:', base)

//5. Definisco il prezzo per utente standard
const totale = (km * base)
console.log('Il totale è:', totale)



// Calcolo sconto per utente

if (anni < 19) {
    const scontoUnder = 0.20
    console.log('sconto under')
}
 else  {
    if (anni > 65){
        const scontoOver = 0.40
        console.log('sconto over')
    }
 }

 //Calcolo prezzo

 


