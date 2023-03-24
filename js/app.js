
// const isDoor = true;
// if (isDoor) {
//   console.log('Bienvenue');  
// } else {
//   console.log('Appele ton ami');
// }

// const color = 'red';

// if (color === 'red') {
//   console.log('Stop');
// } else if (color === 'yellow') {
//   console.log('Attention');
// } else if (color === 'green') {
//   console.log('Rouler');
// } else {
//   console.log('Feux gate');
// }

// Entre pour adulte
// const userAge = '';
// if (userAge < 18) {
//   console.log('Entre inderdite');
// } else if (userAge >= 18) {
//   console.log('Bienvenue');
// } else if (Number(userAge) != false) {
//   console.log('Entrez votre age');
// } 
// const color = 'green';
// const message = color === 'red'? 'Stop' : color === 'greeen'? 'Rouler' : color === 'yellow' ? 'Attention' : 'Feux gate';
// console.log(message);
 //LA meme chose avec switch

//  const color = '';
//  switch (color) {
//   case 'red':
//     console.log('Stop');
//     break;
//   case 'green':
//     console.log('Roulez');
//     break;
//   case 'yellow':
//     console.log('Attention');
//     break;
//   default:
//     console.log('Feux en panne');
//     break;
//  }
// while, for

// let n = 0;

// while (n < 0) {
//   console.log(n);
//   n++;
// }

// const nM = 10;
// for(let i = 0; i < nM; i++){
//   console.log(i + ' Ecrit cette phrase ' + nM + ' fois')
// }


// let countCars = 49;
// const minCars = 3;
// let day = 0;
// while (countCars > minCars) {
//   countCars = Math.ceil(countCars / 2);

//   day++;
// }
// console.log(`Au ${day} jours, il reste moins de ${minCars}`)
// const a = 7;
// const b = 2;
// console.log(Math.ceil(a / b));

// Devoir-Loba
// if et || et &&
// let a = 1;
// if (a === '1'){
//   console.log('Juste');
// } else {
//   console.log('Pas juste');
// }

// const test = false;
// if (!test){
//   console.log('Juste');
// } else {
//     console.log('Pas juste');
// }
// const testE = true;
//  let message = !testE? 'juste' : 'Pas juste'; 
//  console.log(message);

// const a = 2;
// if (a > 0 && a < 5) {
//   console.log('Juste');
// } else {
//   console.log('Pas juste');
// }

// const a = -3;
// if (a === 0 || a === 2) {
//   let message = a + 7;
//   console.log(message);
// } else {
//   let message = a / 10;
//   console.log(message);
// }

// const a = 15;
// const b = 3;

// if (a <= 1 && b >= 3) {
//   console.log(a + b);
// } else {
//   console.log(b - a);
// }
//  const a = 1;
//  const b = 3;

// if ((2 < a && a < 11) || (6 <= b && b < 14)) {
//   console.log('Juste');
// } else {
//   console.log('Pas juste');
// }

// Switch-case

// let num = '';
// switch (num) {
//   case '1':
//     console.log('Hiver');
//     break;
//   case '2':
//     console.log('Printemps');
//     break;
//   case '3':
//     console.log('Ete');
//     break
//   case '4':
//     console.log('Autome');
//     break  
//   default:
//     console.log('Choisissez une saison');
//     break;
// }

// let day = 10;
// if (day < 0) {
//   console.log('Entrer un nombre entre 1 et 31');
// } else if (day === 31) {
//   console.log('Le nombre est dans la quatrieme dexieme');
// } else if (day > 0 && day <= 10) {
//   console.log('Le chiffre en dans le premier dixieme');
// } else if (day > 10 && day <= 20) {
//   console.log('Le chiffre est dans la deuxieme dixieme');
// } else if (day > 21 && day <= 30) {
//   console.log('Le chiffre est dans la troisieme dixieme');
// } else {
//   console.log('Entrez un chiffre entre 1 et 31');
// }

// const month = '';
// if (month <= 0 || month > 12) {
//   console.log('Entrez un nombre entre 1 et 12');
// } else if (month === 12  || month <= 2) {
//   console.log('Hiver');
// } else if (month >= 3 && month <= 5) {
//   console.log('Printemps');
// } else if (month >= 6 && month <= 8) {
//   console.log('Ete');
// } else if (month >= 9 && month <= 11) {
//   console.log('Autome');
// } else {
//   console.log('Entrez un chiffre entre 1 et 12');
// }

// const stroka = 'abcde';
// const stroKa = ['a', 'b', 'c', 'd', 'e']
// if (stroKa[0] === 'a') {
//   console.log('Oui');
// } else {
//   console.log('No');
// }

// const stroKa = ['1', '2', '3', '4', '5']
// if (stroKa[0] === '1' && stroKa[1] === '2' && stroKa[2] === '3') {
//   console.log('Oui');
// } else {
//   console.log('No');
// }

// For et While

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }
// let n = 0;
// while(n < 100) {
//   n++
//   console.log(n);
// }

// for (let i = 11; i <= 33; i++) {
//     console.log(i);
//   }

// let n = 10;
// while(n < 33) {
//   n++
//   console.log(n);
// }

// for (let i = 0; i <= 100; i +=2) {
//   console.log(i);
// }

// let n = 0;
// while(n < 100) {
//   n +=2
//   console.log(n);
// }

//La somme des chiffres de 0 a 100
// let res = 0;
// for (let i = 1; i <= 100; i++) {
//   res = res + i;
// }
// console.log(res);

// Function

// const role = 'admin';
//  function checkAccess(permissionrole) {
//   if (role === 'admin') {
//     return true;
//   } else {
//     return false
//   }
//  }
//  console.log(checkAccess(role));

// function showMessage(message) {
//   console.log(checkAccess(role) ? 'Bonjour admin' : 'Bonjour utilisateur ');
// }

// function sayHi(userName = 'Utilisateur') {
//   console.log(`Bonjour ${userName}`);
// } 

// function sum(number, powNumber = 1) {
//   return number**powNumber;
// }
// console.log(sum(2, 3)); 

let showText = function(text) {
  console.log(text);
}
let showTextNew = function (text) {
  console.log(text + '!!!');
}

function test(func, number) {
  if (number > 10) {
    func('Bonjour');
  }
  func('Aurevoir');
}
test(showText, 10);
test(showTextNew, 10); 

//  Differente maniere de creer une fonction
// const sum = (a,b) => a + b;

// const sum = (a,b) => {
//   return a + b;
// }

// function sum(a,b) {
//   return a+ b;  
// }

// const sum = function(a,b){
//   return a + b;
// }

const texteToRepeat= 'Bonjour les amis';
let repeat = (texteToRepeat, n) => {
  for(let i = 0; i < n; i++) {
    console.log(texteToRepeat);
  }
}