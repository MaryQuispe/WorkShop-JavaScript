//Ejercicio 1
var frase = prompt("Ingrese una frase");
console.log("" +frase);

//Ejercicio 2
var nom = prompt("Ingrese su nombre");
alert("Hola " + nom + " !");

//Ejercicio 3
var nom = prompt("Ingrese su nombre");
var Ape = prompt("Ingrese su apellido");
console.log("Su nombre es: "+ nom +" y su apellido es: " + Ape);

//Ejercicio 4
var AnioNac = prompt("Ingrese su año de nacimiento");
var AnioAct = 2021;
var Edad = AnioAct - AnioNac;
console.log("Tiene: " + Edad+ " años");

//Ejercicio 5
var peso = prompt("Ingrese su peso");
var alt = prompt("Ingrese su altura");
var  BMI = peso/(alt^2 )
//var ibm = peso / (Math.pow(altura,2));
console.log("Tu IBM es: "+BMI);

//Ejercicio 6
var cantidadDeVentanasEnMiCasa = 9;
console.log("La cantidad de ventanas en mi casa es: " + cantidadDeVentanasEnMiCasa);

//Ejercicio 7
var soyHumano = true;
console.log(soyHumano);

//Ejercicio 8
var miGustoDePizzaPreferido = "Napolitana";
console.log(miGustoDePizzaPreferido);

//Ejercicio 9
var valoresfalse = 'Hola ' + 0 + ' Minions'

if(valoresfalse == true){
    console.log(false);
}
else{
console.log(valoresfalse);
}