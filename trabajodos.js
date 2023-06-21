// 1_ Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

// let edad = parseInt( prompt ("Introduce tu edad"));
//     if (edad >= 18) {
//        console.log("Puedes conducir");
//     }
//     else {
//        console.log ("No tienes la edad suficiente para conducir");
//     }

// 2_ Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// let nota = parseInt(prompt("Escribe un numero de 0 a 10")) 
// switch (nota) {
//     case 0:
//     case 1:
//     case 2:
//         alert( "muy deficiente");
//         break;
//     case 3:
//     case 4:
//         alert( "insuficiente");
//         break;
//     case 5:
//     case 6:
//         alert("suficiente");
//         break;
//     case 7:
//        alert( "bien");
//         break;
//     case 8:
//     case 9:
//         alert( "notable");
//         break;
//     case 10:
//         alert ("sobresaliente");
//         break;
 
//     default: 
//         alert ("Introduce un numero valido")
//         break;
// }


// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// let cadenas = [];
// let cadena;
// do {
//     cadena = prompt("Ingrese una cadena de texto (o presione 'cancelar' para salir):");
//     if (cadena !== null) {
//       cadenas.push(cadena);
//     }
//   } while (confirm("quiere continuar ingresando texto"));
  
//   const resultado = cadenas.join("-");
  
//   console.log(resultado);



// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.


// let suma = 0 ;


// do {
//     let ingreso = parseInt(prompt (`ingrese un numero`));
//     if (isNaN(ingreso)) {
//         alert(`el valor ingresado no es un numero`);
//     } else {
//         suma = suma + ingreso;
//         console.log(suma);
//     }


// } while (confirm("quiere continuar ingresando numeros para sumar")); //funciona como alert

// console.log(suma);




// 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

// El algoritmo para calcular la letra del dni es el siguiente :

// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
// Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

// let resto = 0;
// let dni = "";
// do {
//     let numero = prompt("Ingresa tu numero de DNI");
//     if (Number(numero) == numero) {
//         numero = Number(numero);
//         if (numero >= 0 && numero <= 99999999) {
           
//             resto = numero % 23;

//             switch (resto) {
//                 case 0:
//                     dni = "T";
//                     break;
//                 case 1:
//                     dni = "R";
//                     break;
//                 case 2:
//                     dni = "W";
//                     break;
//                 case 3:
//                     dni = "A";
//                     break;
//                 case 4:
//                     dni = "G";
//                     break;
//                 case 5:
//                     dni = "M";
//                     break;
//                 case 6:
//                     dni = "Y";
//                     break;
//                 case 7:
//                     dni = "F";
//                     break;
//                 case 8:
//                     dni = "P";
//                     break;
//                 case 9:
//                     dni = "D";
//                     break;
//                 case 10:
//                     dni = "X";
//                     break;
//                 case 11:
//                     dni = "B";
//                     break;
//                 case 12:
//                     dni = "N";
//                     break;
//                 case 13:
//                     dni = "J";
//                     break;
//                 case 14:
//                     dni = "Z";
//                     break;
//                 case 15:
//                     dni = "S";
//                     break;
//                 case 16:
//                     dni = "Q";
//                     break;
//                 case 17:
//                     dni = "V";
//                     break;
//                 case 18:
//                     dni = "H";
//                     break;
//                 case 19:
//                     dni = "L";
//                     break;
//                 case 20:
//                     dni = "C";
//                     break;
//                 case 21:
//                     dni = "K";
//                     break;
//                 case 22:
//                     dni = "E";
//                     break;
//                 default:
//                     alert("Numero incorrecto");
//             }
//         }
//         alert("el valor de la letra es: " + dni);
//     }
//     else {
//         if (numero != undefined) {
//             alert(numero + " No es un numero");
//         }
//     }
// }


// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

// 1
// 22
// 333
// 4444
// 55555
// 666666
// …….

 
// let i;
// let rep;
// for (i = 1; i <= 30; i++) { 
//     for (rep = 0; rep < i; rep++)     
//         document.write(i);
//     }
    
//     document.write("<br>");


// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// let numero= parseInt(prompt ("ingrese un numero"))
// numero = (numero >50) ?50: numero //pregunta el numero es una condicion que me indica hasta que nnumero va 
// for (let i=50; i>0; i--)
// {
// console.log(i.toString().repeat(i));
// }


// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……

// let numero = parseInt (prompt('Introduce un numero del 0 al 50'));
// numero <=50 
// if (number(numero)== numero) {
    
// } else if ( numero >0 && numero <=50 ){
//  console.log ("")
// } else {
//     alert ("El numero no es correcto")
// }



// 9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

// 1
// 2
// 3
// 4 (Múltiplo de 4)
// 5-
// ————————————————————-

// 6
// 7
// 8 (Múltiplo de 4)
// 9 (Múltiplo de 9)
// // 10


// for (let i = 1; i < 501; i++){
//     if (i % 4 === 0){
//         console.log(`${i} es multiplo de 4.`);
//     }
//     else if(i % 9 === 0){
//         console.log(`${i} es multiplo de 9.`);
//     } else {
//         console.log(i);
//     }
//     if (i % 5 === 0) {
//         console.log("-------------------------------------------");
//     }
// }



    

// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

// Ejercicios con Math

// let columnas = parseInt(prompt(`ingrese el numero de columnas`));
// let filas = parseInt(prompt(`ingrese el numero de filas`));
// let numero = columnas * filas;
// let celda;

// for (let i = 0; i < columnas; i++) {
//     for (let j = 0; j < filas; j++) {
//         celda = numero;
//         numero = numero - 1;
//         console.log(`el valor de la celda de la columna ${i+1} y fila ${j+1} tiene el valor: ${celda} `);
//     }
 
// }

// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

// Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
// let nombre1 = prompt("Ingrese el primer nombre:");
// let edad1 = parseInt(prompt("Ingrese su edad:"));

// let nombre2 = prompt("Ingrese el segundo nombre:");
// let edad2 = parseInt(prompt("Ingrese su edad:"));

// let nombre3 = prompt("Ingrese el tercer nombre:");
// let edad3 = parseInt(prompt("Ingrese su edad:"));

// let maximo = Math.max(edad1, edad2, edad3);

// if (maximo == edad1) {
//     console.log("El mayor es: " + nombre1);
// }
// if (maximo == edad2) {
//     console.log("El mayor es: " + nombre2);
// }
// if (maximo == edad3) {
//     console.log("El mayor es: " + nombre3);
// }

// // 12- Realiza un script que genere un número aleatorio entre 1 y 99
// let i = true
// let aleatorio
// while (i) {
//     aleatorio = Math.floor(Math.random()*100);
//     if (aleatorio > 0 && numeroAleatorio < 100) {
//         i = false ;
//     }
// }

// console.log(aleatorio);





// Ejercicios con String



// 13- Realiza un script que pida un texto y lo muestre en mayúsculas.


// 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
// let cadena = prompt("Introduce una cadena de texto:");
// let largo = cadena.length;    // Devuelve la longitud del string.
// let caracter = "-";
// let index = i
// for (i = 0; i < largo; i++) {
//     caracter = cadena.charAt(i);    // recupera el caracter i del string.
//     if (i == largo - 1) {
//         document.write(caracter);
//     }
//     else {
//         document.write(caracter + "-");
//     }
// }


// // 15- Realiza un script que cuente el número de vocales que tiene un texto.
// let texto = prompt("Ingrese un texto");
// let suma = 0;

// for(i=0; i<texto.length; i++){
//     let vocal = texto.charAt(i);
//     if(vocal == "a" || vocal == "e" || vocal == "i" || vocal == "o" || vocal == "u"){
//         suma = suma + 1;
//     }
// }
// console.log(suma);

// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
// let cadena = prompt("ingresar una cadena de texto:");
// let salida = "";

// for (let i = cadena.length - 1 ; i >= 0; i-- ) {
//      salida = salida + cadena[i];
    
// }
// console.log(salida);



// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

// let vocal = prompt("ingrese un texto").toLowerCase()
// let vocales = ["a", "e","i","o","u"] 
// let posicion = ".."
// document.write(vocales.length);
// for (let i = 0; i < vocal.length; i++) {
//     switch (vocal[i]) {
//                 case "a":
//                     posicion = i;
//                     vocales = "a";
//                     corte = true;            
//                 break;
//                 case "e":
//                     pos = i;
//                     vocal = "e";    
//                     corte = true;           
//                 break;
//                 case "i":
//                     pos = i;
//                     vocal = "i";    
//                     corte = true;           
//                 break;
//                 case "o":
//                     pos = i;
//                     vocal = "o";    
//                     corte = true;           
//                 break;
//                 case "u":
//                     pos = i;
//                     vocal = "u";    
//                     corte = true;           
//                 break;
//                 default:
//                 break;
//             }
//             if (corte == true) {
//                 break;
//             }
//         }
//         console.log(la vocal '${vocal}' está en la posición ${posicion}.`);