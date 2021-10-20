/* Password generator:
- chiedi all’utente il suo nome,
- poi chiedi il suo cognome,
- poi chiedi il suo colore preferito
- infine scrivi sulla pagina i dati ricevuti nel formato: nomecognomecolorepreferito21
*/

//Chiedere all'utente il nome tramite input

const firstName = prompt("Qual è il tuo nome?");

//Chiedere all'utente il cognome tramite input
const lastName = prompt("Qual è il tuo cognome?");

//Chiedere all'utente il colore preferito tramite input
const color = prompt("Qual è il tuo colore preferito?");

// Tenerle in memoria e mostrare sulla pagina i dati ricevuti in un determinato formato (nomecognomecolorepreferito21)

// Concatenazione
/*document.getElementById("password").innerHTML =
firstName + lastName + color + "21"; */

// Creo variabile che racchiuda i dati ricevuti dall'utente
let returnPassword = `${firstName}${lastName}${color}21`;

// Mostro nel documento la password creata con i dati ricevuti tramite template literal
document.getElementById("password").innerHTML = returnPassword;
