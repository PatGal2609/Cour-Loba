const userAge = '';
if (userAge < 18) {
  console.log('Entre inderdite');
} else if (userAge >= 18) {
  console.log('Bienvenue');
} else if (Number(userAge) != false) {
  console.log('Entrez votre age');
}