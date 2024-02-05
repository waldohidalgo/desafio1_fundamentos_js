/* Las funcion ejercicio2Ejecutar encapsula variables y operaciones que corresponden 
al ejercicio 2 de modo de llamarla al hacer click en un botón en el html
*/
const ejercicio2Ejecutar = () => {
  /* Dos lineas siguientes declaran dos variables siendo la primera
variable flagNumero1 booleana la cual permite controlar un ciclo while 
que verifica si la data ingresada es númerica o no.
La segunda variable numero1 almacena el número ingresado
*/
  let flagNumero1 = false;
  let numero1 = null;
  /*
El ciclo while  siguiente es controlado por la variable flagNumero1 siendo inicialmente
igual a False. Dentro del ciclo while se almacena la data ingresada y se realiza su conversion
a un valor numerico en caso en que sea posible y en caso contrario se convierte a NaN. Si es NaN
se muestra una alerta mencionando que se ha ingresado un dato con no valor númerico y se continua 
con la siguiente iteración del ciclo while. Si no es NaN entonces la data ingresada con valor númerico se almacena en la variable numero1 y la flagNumero1 se establece en true de modo de finalizar el ciclo while.
*/
  while (!flagNumero1) {
    const dataIngresada = +prompt("Ingresa un primer número mayor que cero"); // conversión de string a number
    if (!isNaN(dataIngresada)) {
      //Si la data ingresada posee valor númerico entonces esta condición se cumple
      if (dataIngresada > 0) {
        //si la data es mayor que cero, se asignan valores a variables numero1 y flagNumero1 saliendo del ciclo while
        numero1 = dataIngresada;
        flagNumero1 = true;
      } else {
        alert("Has ingresado un numero menor que cero");
      }
    } else {
      //Si la data ingresada NO posee valor númerico entonces esta condición se cumple mostrando una alerta
      alert(
        "El dato ingresado no es del tipo númerico. Por favor, ingresa un número"
      );
    }
  }
  /*
Se sigue la misma lógica que el código lineas más arriba pero ahora se realiza una comparación de valores numericos de modo de verificar si ambos valores numericos son distintos o no. Si son distintos,entonces la variable numero2 es seteada a su valor númerico y la flagNumero2 es seteada a true
*/
  let flagNumero2 = false;
  let numero2 = null;
  while (!flagNumero2) {
    const dataIngresada = +prompt(
      "Ingresa un segundo número distinto al primero mayor que cero"
    );
    if (!isNaN(dataIngresada)) {
      numero2 = dataIngresada;
      //Se verifica si el valor ingresado es mayor que cero
      if (numero2 > 0) {
        // se procede a verificar si valores numericos ingresados son diferentes
        if (numero1 != numero2) {
          //Si las variables numero1 es diferente de la variable numero2 entonces se termina el ciclo while
          flagNumero2 = true;
        } else {
          //Si las variables numericas NO son diferentes entonces se muestra una alerta y se procede con la siguiente iteración del ciclo while
          alert(
            "El número ingresado es igual al primer número. Por favor, ingresa un número distinto"
          );
        }
      } else {
        //Si se ha ingresado un numero menor que cero se muestra una alerta y se continua con el ciclo while
        alert("Has ingresado un numero menor que cero");
      }
    } else {
      //Si la data ingresada NO posee valor númerico entonces esta condición se cumple mostrando una alerta
      alert(
        "El dato ingresado no es del tipo númerico. Por favor, ingresa un número"
      );
    }
  }

  //Usando template string realizo las operaciones de suma,resta, división, multiplicacion y módulo y lo muestro en el navegador vía una alerta
  alert(`
Se han ingresado dos números distintos siendo el primero ${numero1} y el segundo número ${numero2}:
1-Su suma es: ${numero1 + numero2}
2-Su resta es: ${numero1 - numero2}
3-Su división es: ${(numero1 / numero2).toFixed(3)}
4-Su multiplicación es: ${numero1 * numero2}
5-Su módulo es: ${numero1 % numero2}
`);
};
