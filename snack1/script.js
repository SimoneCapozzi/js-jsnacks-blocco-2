// ciclo for

var somma = 0;

for ( var i = 0; i < 5; i++ ){
  var nuovoNumero = parseInt(prompt("Inserisci un numero"));
  somma += nuovoNumero;
}

console.log(somma);

//ciclo while

var somma = 0;

var i = 0;

while(i < 5){
  var nuovoNumero = parseInt(prompt("Inserisci un numero"));
  somma += nuovoNumero;
  i++
}

console.log(somma);