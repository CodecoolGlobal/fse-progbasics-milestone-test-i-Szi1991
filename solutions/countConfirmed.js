/*
Fill the function countConfirmed(), which gets an array of users as parameter.

A user object in the received array will look like this:

{
  "id": 123,
  "username": "steve.simon",
  "email": "steve.simon12@gmail.com",
  "phone": "+44701231231",
  "isConfirmed": true
}
Count the users where the isConfirmed key's value is true and return the amount as a number.
If you receive an array which contains only one user object where the isConfirmed key's value is true then return 1.

Számolja meg azokat a felhasználókat, akiknél az isConfirmed kulcs értéke igaz, és adja vissza az összeget számként.
Ha olyan tömböt kap, amely csak egy felhasználói objektumot tartalmaz, ahol az isConfirmed kulcs értéke igaz, akkor adjon vissza 1-et.
*/


function countConfirmed(users) {
  let count = 0;
  for (let i = 0;i < users.length;i++){
    if (users[i].isConfirmed === true){
      count++;
    }

  }

  return count;

}

module.exports = countConfirmed;
