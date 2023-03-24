let countCars = 49;
const minCars = 3;
let day = 0;
while (countCars > minCars) {
  countCars = Math.ceil(countCars / 2);

  day++;
}
console.log(`Au ${day} jours, il reste moins de ${minCars}`)