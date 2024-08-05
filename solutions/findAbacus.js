/*
Context
Abacus the powerful wizard is hiding somewhere in a pile of object-s! We quickly put all objects in an array before he got away.
But we still don't know which object contains the mage! Help us find which object has a key called abacus and its value is true!

Task & Objectives
TODO: Write the findAbacus(array) function so it returns the index of the object which contains the key abacus and its value is true.
If none of the objects contain Abacus, return null !

Tip
The wrong object may contain the key abacus but with false value! There may only be one object which contains the key as true.

-------------

Abacus, a hatalmas varázsló valahol egy rakás tárgyban rejtőzik! Gyorsan az összes tárgyat egy tömbbe helyeztük, mielőtt elmenekült.
De még mindig nem tudjuk, melyik tárgy tartalmazza a mágust! Segítsen megtalálni, melyik objektumnak van abacus nevű kulcsa, és az értéke igaz!

Feladat és célkitűzések
TODO: Írja meg a findAbacus(array) függvényt úgy, hogy visszaadja annak az objektumnak az indexét, amely a kulcsabakuszt tartalmazza, és értéke igaz.
Ha egyik objektum sem tartalmazza az Abacust, adja vissza a null értéket!

Tipp
Lehetséges, hogy a rossz objektum tartalmazza a kulcs abakuszt, de hamis értékkel! Csak egy objektum lehet, amely a kulcsot igazként tartalmazza.
*/

function findAbacus(array) {

  for (let i =0; i < array.length; i++) {
    if (array[i].abacus === true) {
      return i;
    }
  }

  return null;

}

module.exports = findAbacus;
