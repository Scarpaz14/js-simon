// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



// FUNCTIONS----------
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// SCRIPT----- 

// stampiamo in pagina 5 numeri casuali
const number = 5;
const listNumber = [];
    while (listNumber.length < number  ) {
        //genero numeri random fra 1 e 100
        let numberRandom = getRndInteger(1,100)
        // pushamo dentro l'array 
        listNumber.push(numberRandom);  
    }
   alert(listNumber);


//Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

let usernumber;
let userList = [];

setTimeout(function (){
    for ( let i=0; i<5; i++)
  usernumber = prompt("inserisci i numeri che hai visto prima")
  userList.push(usernumber); 
  console.log(userList)
}, 3000);



