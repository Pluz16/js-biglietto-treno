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
const tot = (km * base)
const scontoU = (tot * 0.20)
const scontoO = (tot * 0.40)

const prezzo = document.getElementById('totale')

// Calcolo sconto per utente

if (anni < 19) {
    console.log('sconto under è:', scontoU)
    const totaleUnder = tot - scontoU
    console.log = ('Il totale scontato è:', totaleUnder)
    prezzo.innerHTML = totaleUnder + "$"
}
 else if (anni > 65) {
    {
        console.log('sconto over è:', scontoO)
        const totaleOver = tot - scontoO
        console.log = ('Il totale scontato è:', totaleOver)
        prezzo.innerHTML = totaleOver + "$"
 }
    }

    else {
        console.log('non scontato')
        console.log = ('Il totale è:', tot)
        prezzo.innerHTML = tot + "$"
    }



// STAMPO


    
 

    // PREZZO SCONTATO

    // if (anni < 19){
    //     const totaleU = tot - scontoU
    // console.log = ('Il totale scontato è:', totaleU)
    // }

    // else if (anni > 65){
    //     const totaleO = tot - scontoO
    // console.log = ('Il totale scontato è:', totaleO)
    // }

    // else{
    //     console.log = ('Il totale è:', totale)
    // }



