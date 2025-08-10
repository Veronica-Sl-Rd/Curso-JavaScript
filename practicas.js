/*let edad = 15
if (edad >=18) {
    console.log ("Sos mayor de edad");}
    else {
    console.log ("Sos menor de edad")
} 

let miEdad = prompt ("Ingresa tu edad");
console.log(miEdad);

if (miEdad === "" || miEdad === null) {
    alert("Ingresa un valor");}
    else if (isNaN(miEdad)) {
    alert ("El valor ingresado debe ser un número");}
    else {
    miEdad=parseInt(miEdad);
    console.log(`Tienes ${miEdad} años`);
    console.log(typeof miEdad)
    } */

/*let numeroIngresado = parseInt(prompt("Ingresa un número"));

for (let i=1; i<=10; i++) {
    /*let tabla = numeroIngresado * i;
    console.log(`El ${numeroIngresado} X ${i} = ${tabla}`);
    if (i===5) {
        continue;
    }
    console.log(i);
}

let numeroSecreto = 8
let intentosTotales = 3

for (
    let intentosUsuario = 1;
    intentosUsuario <= intentosTotales;
    intentosUsuario++) {
    let eleccionUsuario = parseInt(
        prompt("Adivina el número secreto")
    );

    if (eleccionUsuario === numeroSecreto) {
        console.log(`Adivinaste!! El numero secreto era ${numeroSecreto}`);
        break;
    }

    if (intentosUsuario === intentosTotales) {
        alert(`No conseguiste adivinar, el numero era  ${numeroSecreto}`);
        break;
    }

    alert(`Llevas ${intentosUsuario} intento`);
}
*/

/* ACTIVIDADES 
///1///
let nroIngresado = parseInt(prompt("Ingresa un número"));
if (nroIngresado > 0) {
    alert(`Positivo`);} 
    else if (nroIngresado < 0) {
    alert(`Negativo`);} 
    else {nroIngresado === 0 
    alert(`Cero`);} */

///2///
/*
let num1 = parseInt(prompt("Ingresá el primer número:"));
let num2 = parseInt(prompt("Ingresá el segundo número:"));
let num3 = parseInt(prompt("Ingresá el tercer número:"));
let num4 = parseInt(prompt("Ingresá el cuarto número:"));


if (num1 === num2 || num1 === num3 || num1 === num4 ||
    num2 === num3 || num2 === num4 || num3 === num4) {
    alert("Los números deben ser todos distintos.");
} else {
    
    let mayor = num1;

    if (num2 > mayor) {
        mayor = num2;
    }
    if (num3 > mayor) {
        mayor = num3;
    }
    if (num4 > mayor) {
        mayor = num4;
    }

    alert(`El número mayor es: ${mayor}`);} */

///3///
/*
let num1 = parseInt(prompt("Ingresá el primer número:"));
let num2 = parseInt(prompt("Ingresá el segundo número:"));
let num3 = parseInt(prompt("Ingresá el tercer número:"));
let num4 = parseInt(prompt("Ingresá el cuarto número:"));
let num5 = parseInt(prompt("Ingresá el quinto número:"));

if (num1 === num2 || num1 === num3 || num1 === num4 || num1 === num5 ||
    num2 === num3 || num2 === num4 || num2 === num5 || num3 === num4 ||
    num3 === num5 || num4 === num5) {
    alert("Los números deben ser todos distintos.");
} else {
    let mayor = num1;
    let menor = num1;2
    ///mayor
    if (num2 > mayor) {
        mayor = num2;
    }
    if (num3 > mayor) {
        mayor = num3;
    }
    if (num4 > mayor) {
        mayor = num4;
    }
    if (num5 > mayor) {
        mayor = num5
    }
    ///menor
    if (num2 < menor) {
        menor = num2;
    }
    if (num3 < menor) {
        menor = num3;
    }
    if (num4 < menor) {
        menor = num4;
    }
    if (num5 < menor) {
        menor = num5;
    }
    alert(`El número mayor es: ${mayor} y el número menor es ${menor}`);
} */

///4///
/*for (let i=0; i<=100;i+=5) {
    if (i % 5 === 0) {
    console.log(i);}
} */

///5///
/*let numero = parseInt(prompt("Ingresá un número entero mayor que 1:"));
let esPrimo = true;

if (numero <= 1) {
    alert("El número debe ser mayor que 1.");
} else {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        alert(numero + " es un número primo.");
    } else {
        alert(numero + " NO es un número primo.");
    }
}*/


///Propuestas de Chat GPT

//Edad para votar//
/*let edad = prompt("Ingresa tu edad");
if (edad < 16) {
    alert("Todavía no podes votar");
} else {
    alert("Podés votar");
}*/

//Conversor de grados//
/*let gradosC = parseInt(prompt("Ingresa los grados Celsius para convertir"));
if (gradosC) {
    let gradosF = gradosC * 9/5 +32;
    alert(`Equivale a ${gradosF} grados Farenheit`);
}*/

//Notas//
/*let nota = prompt("Ingresa tu nota del 1 al 10 para ver si aprobaste");
if (nota < 4) {
    alert("Desaprobaste")
} else if (nota>=4 && nota<=6) {
    alert("Zafaste");
} else if (nota>=7) {
    alert("Aprobaste")
}*/

///Suma de números
/*let N = parseInt(prompt("Ingresa un número positivo mayor que 0"));
let suma = 0

if (isNaN(N) || N < 1) {
    alert("Número inválido. Debe ser un entero mayor a 0.");}
    else {
for (let i=1; i<=N; i++) {
    suma+= i;}
    alert(`La suma de los números del 1 al ${N} es ${suma}`)
}*/

///Contarvocal A
/*let texto = prompt("Ingresa un texto breve a continuación");
let totalVocalA = 0

for (let i = 0; i < texto.length; i++) {
let vocalA = texto[i].toLowerCase();
if (vocalA === "a") {
    totalVocalA++;}
}
alert(`total de letras a en el texto es ${totalVocalA}`);*/

