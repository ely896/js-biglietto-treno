//Dichiarazione variabile per chiedere quanti km vuole percorre con il treno
const km = parseInt(prompt ('Quanti km vuoi percorre con il treno?'));

console.log(km);

//Dichiarazione variabile per chiedere quanti anni ha

const userAge = parseInt(prompt ('Quanti anni hai?'));

console.log(userAge);


//Dichiarazione variabile costo del treno al km
//const priceKm = 0.21;

//Dichiarazione variabile sconto sul prezzo del biglietto per underAge

const discountunderAge = 0.2;

//Dichiarazione variabile prezzo del biglietto per Underage

let priceTicketUnderage = 0.21 * userAge * discountunderAge;



//Dichiarazione variabile sconto per persone di età superiore ai 65 anni

const discountSenior = 0.4;

//Dichiarazione variabile prezzo del biglietto per Senior

let priceTicketSenior = 0.21 * userAge * discountSenior;


/*Dichiarazione variabile prezzo del biglietto del treno per persone che hanno
 un età compresa tra i 18 e i 65 anni*/

let priceTicket = 0.21 * userAge;

if (userAge >= 18 && userAge<=65) {

    console.log(priceTicket);
    document.getElementById("expense").innerHTML = priceTicket.toFixed(2);

} else if (userAge <18) {

    console.log(priceTicketUnderage);
    document.getElementById("expense").innerHTML = priceTicketUnderage.toFixed(2);


}  else if (userAge >65) {

    console.log(priceTicketSenior);
    document.getElementById("expense").innerHTML = priceTicketSenior.toFixed(2);

}





