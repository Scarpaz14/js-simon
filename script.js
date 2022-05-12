// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



// FUNCTIONS----------
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// SCRIPT----- 

// stampiamo in pagina 5 numeri casuali

const listNumber = [];
    for(let i = 0; i< 5; i++) {
        //genero numeri random fra 1 e 100
        let numberRandom = getRndInteger(1,100)
        // pushamo dentro l'array 
        listNumber.push(numberRandom);  
    }
   alert(listNumber);


//Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

let usernumber;
let userList = [];


setTimeout(function() {
    for (let i = 0; i < 5; i++) {
        usernumber = Number(prompt("inserisci i numeri che hai visto"));
      for (let j = 0; j < listNumber.length; j++) {
        if (usernumber == listNumber[j]) {
            userList.push(usernumber);
        }
      }
    }
    
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    alert("Sei riuscito ad indovinare " + userList.length + " numeri su 5. Esattamente i numeri che hai indovinato sono: " + userList)
    console.log(userList)
  }, 3000);





