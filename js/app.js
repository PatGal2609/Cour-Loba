
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
let countCars = 49;
const minCars = 3;
let day = 0;
while (countCars > minCars) {
  countCars = Math.ceil(countCars / 2);

  day++;
}
console.log(`Au ${day} jours, il reste moins de ${minCars}`)
// const a = 7;
// const b = 2;
// console.log(Math.ceil(a / b));