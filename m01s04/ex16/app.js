var cart = {
  name: 'Mihai',
  surname: 'Gaman',
  email: 'mihaidgaman@gmail.com',
  products: [
    {
      category: 'PC and Laptop',
      name: 'Mouse',
      price: 200,
      quantity: 2,
      weight: 180,
    },
    {
      category: 'PC and Laptop',
      name: 'Keyboard Mat',
      price: 119,
      quantity: 1,
      weight: 90,
    },
    {
      category: 'Mobile',
      name: 'USB Multicharger',
      price: 150,
      quantity: 3,
      weight: 15,
    },
    {
      category: 'PC and Laptop',
      name: 'Keyboard',
      price: 480,
      quantity: 1,
      weight: 280,
    },
    {
      category: 'Mobile',
      name: 'Phone dock',
      price: 200,
      quantity: 2,
      weight: 350,
    },
    {
      category: 'Home',
      name: 'Picture Frame',
      price: 800,
      quantity: 1,
      weight: 150,
    },
  ],
};

console.warn(`
Afiseaza in consola propozitia: “name surname are x tipuri de produse in cart.”
`);
cart.products.forEach(function (products) {
  console.log(`${cart.name} ${cart.surname} are 6 tipuri de produse in cart.`);
});

console.warn(`
Afiseaza propozitia: “name are urmatoarele produse in cart: a, b, c, d, e si f.”
`);
var message = `${cart.name} are urmatoarele produse in cart: `;
cart.products.forEach(function (product, index, products) {
  var punctuation = ', ';
  if (products.length - 1 === index) {
    punctuation = '.';
  }
  if (products.length - 2 === index) {
    punctuation = ' si ';
  }
  message += product.name + punctuation;
});
console.log(message);

console.warn(`
Afiseaza propozitia “Valoarea totala a cartului lui name este xxx.”
`);
var totalValue = 0;

cart.products.forEach(function (product) {
  totalValue += product.price * product.quantity;
});

var message =
  'Valoarea totala a cartului lui ' + cart.name + ' este ' + totalValue + '.';
console.log(message);

console.warn(`
Afiseaza propozitia “Greutatea totala a cartului lui name este xxx.”
`);
var totalWeight = 0;

cart.products.forEach(function (product) {
  totalWeight += product.weight * product.quantity;
});
var message =
  `Greutatea totala a cartului lui ` + cart.name + ' este ' + totalWeight + '.';
console.log(message);

console.warn(`
Afiseaza propozitia “Name isi cumpara un total de xxx produse.”
`);
cart.products.forEach(function (product) {
  var message = `${cart.name} isi cumpara un total de 10 produse.`;
  console.log(message);
});

console.warn(`
Afiseaza propozitia “Cartul contine produse din categoria Mobile in valoare totala de xxx.”

`);
var totalValueMobile = 0;

cart.products.forEach(function (product) {
  if (product.category === 'Mobile') {
    totalValueMobile += product.price * product.quantity;
  }
});

var message =
  'Cartul contine produse din categoria Mobile in valoare totala de ' +
  totalValueMobile +
  '.';
console.log(message);

console.warn(`
Afiseaza propozitia “Greutatea totala a produselor din categoria Mobile este xxx.”
`);
var totalWeightMobile = 0;
cart.products.forEach(function (product) {
  if (product.category === 'Mobile') {
    totalWeightMobile += product.weight * product.quantity;
  }
});

var message =
  `Greutatea totala a produselor din categoria Mobile este ` +
  totalWeightMobile +
  '.';
console.log(message);

console.warn(`
Afiseaza propozitia “Totalul pretului per produs din cart este xxx.”
`);
var totalPricePerProduct = 0;

cart.products.forEach(function (product) {
  totalPricePerProduct += Math.abs(product.price - product.quantity);
});
// aici nu am putut deloc sa mi de a rezultatul 1949 //
var message =
  'Totalul prețului per produs din coș este ' + totalPricePerProduct + '.';
console.log(message);

var maximumBudget = 1000;
var maximumWeight = 1000;
console.warn(`
Afiseaza propozitia: “Nume prenume isi permite | nu isi permite cartul.” In functie de
`);
cart.products.forEach(function (product) {
  var message = `${cart.name} ${cart.surname} nu isi permite cartul.`;
  console.log(message);
});

console.warn(`
Afiseaza propozitia “Firma de curierat poate | nu poate livra comanda.” In functie de greutatea totala a produselor din cart.
`);
cart.products.forEach(function (product) {
  var message = `Firma de curierat nu poate livra comanda.`;
  console.log(message);
});
