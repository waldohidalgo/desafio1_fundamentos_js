/* Las funcion ejercicio3Ejecutar encapsula variables y operaciones que corresponden 
al ejercicio 3 de modo de llamarla al hacer click en un botón en el html
*/
const ejercicio3Ejecutar = () => {
  /*
Declaro dos variables temperaturaCelsius y flagTemperatura. La variable flagTemperatura 
me permitira controlar un ciclo while y la variable temperaturaCelsius será el valor númerico
ingresado
*/

  let temperaturaCelsius = null;
  let flagTemperatura = false;
  /*
El ciclo while de abajo es controlado por la flagTemperatura dentro de cada iteración.
Si la data ingresada posee valor númerico, es decir, es distinta a NaN entonces la 
temperaturaCelsius es establecida a dicho valor númerico y el ciclo while es detenido 
vía la flagTemperatura
*/
  while (!flagTemperatura) {
    const dataIngresada = +prompt("Ingresa una temperatura en grados Celsius");
    if (!isNaN(dataIngresada)) {
      temperaturaCelsius = dataIngresada;
      flagTemperatura = true;
    } else {
      //Si la data ingresada no posee valor númerico entonces se muestra una alerta y después se
      //continua con el ciclo while
      alert("Has ingresado data que no es númerica. Ingresa data númerica");
    }
  }

  /*
Cuando la data ingresada posee valor númerico entonces se mostrará la siguiente alerta
la cual muestra la temperatura en grados Celsius, en grados Kelvin y en grados Fahrenheit
*/
  alert(`
La temperatura ingresada en grados Celsius es: ${temperaturaCelsius}.
La temperatura en grados Kelvin es: ${temperaturaCelsius + 273.15}
La temperatura en grados Fahrenheit es: ${(
    (9 / 5) * temperaturaCelsius +
    32
  ).toFixed(3)}
`);
};
