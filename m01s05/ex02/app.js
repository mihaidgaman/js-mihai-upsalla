function calculateRectangleArea(width, length) {
  const area = width * length;

  return area;
}

console.warn(`
Folosind functia calculateRectangleArea(), afiseaza suprafata unui dreptunghi de 4 pe 3
`);
console.log(calculateRectangleArea(4, 3));

console.warn(`
Afiseaza suprafata totala a unor dreptunghiuri de 5 pe 3, respectiv 3 pe 2. Foloseste variabile.
`);
const rectangle1Surface = calculateRectangleArea(5, 3);
const rectangle2Surface = calculateRectangleArea(3, 2);

console.log(rectangle1Surface + rectangle2Surface);
console.log(rectangle1Surface);
console.log(rectangle2Surface);

const squareSurface = calculateRectangleArea(3, 3);

console.log(calculateRectangleArea(3, 3));

console.warn(`
Folosind functia calculateRectangleArea(), afiseaza suprafata unui dreptunghi de 12 pe 9
`);
console.log(calculateRectangleArea(12, 9));

console.warn(`
Afiseaza suprafata totala a trei dreptunghiuri de 15 pe 31,  8 pe 9, respectiv 10 pe 5. Foloseste variabile.
`);
var anotherSquare = 64;
const area1 = calculateRectangleArea(15, 31);
const area2 = calculateRectangleArea(8, 9);
const area3 = calculateRectangleArea(10, 5);

console.log(area1 + area2 + area3);
console.log(area1);
console.log(area2);
console.log(area3);

console.log(anotherSquare);
