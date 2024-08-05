/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/*
Write the filterDivisible(numbers, divisor) function, that will get an array of numbers and a number.
Your task is to find the numbers in the array that are divisible with the provided number and return them in an array.

Tip
If none of the numbers are divisible by the given number, then return an empty array.
Be mindful of division by 0. If the given number is 0 then return null.
If the array is empty then it should return an empty array.

Írja fel a filterDivisible(számok, osztó) függvényt, amely számokból és számokból álló tömböt kap.
Az Ön feladata, hogy megkeresse a tömbben azokat a számokat, amelyek oszthatók a megadott számmal, és tömbben adja vissza őket.

Tipp
Ha egyik szám sem osztható a megadott számmal, akkor adjon vissza egy üres tömböt.
Ügyeljen a 0-val való osztásra. Ha a megadott szám 0, akkor nullát adjon vissza.
Ha a tömb üres, akkor üres tömböt kell visszaadnia.
 */

function filterDivisible(numbers, divisor) {

  const result = [];

  for (const number of numbers) {

    if (number % divisor === 0) {
      result.push(number);
    }
  }

  if (divisor === 0) {
    return null;
  }

  if (numbers.length === 0) {
    return [];
  }

  return result;

}

module.exports = filterDivisible;
