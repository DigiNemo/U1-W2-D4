/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function (l1, l2) {
  let result = l1 * l2;
  return result;
};
console.log(area);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (n1, n2) {
  let result1 = n1 === n2 ? (n1 + n2) * 3 : n1 + n2;
  return result1;
};
console.log(crazySum);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (m1, m2) {
  let m2 = 19;
  let result2 = m1 > m2 ? (m1 + m2) * 3 : m1 - m2;
  return result2;
};
console.log(crazyDiff);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (n) {
  console.log(20 < n <= 100 || n === 400);
  return boundary;
};
console.log(boundary);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (o) {
  let result3 = o / 3 || o / 7;
  return check3and7;
};
console.log(check3and7);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function () {
  String = "EPICODE";
  String1 = string.replace("EPICODE", "EDOCIPE");
  return reverseString;
};
console.log(reverseString);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = function () {
  string2 = "ciao come stai?";
  console.log(string2.slice(0, 1).toUpperCase() + stringa.slice(1));
  console.log(string2.slice(5, 1).toUpperCase() + stringa.slice(1));
  console.log(string2.slice(10, 1).toUpperCase() + stringa.slice(1));
  return upperFirst;
};

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function () {
  string3 = "La vita è bella";
  console.log(string3.slice(0) + stringa.slice(-1) + stringa.slice(1));
  return cutString;
};

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function () {
  let = n;
  n = [Math.random] * 10;
  return giveMeRandom;
};
console.log(giveMeRandom);
