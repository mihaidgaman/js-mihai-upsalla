const calculateRectangleArea = function (width, length) {
  const area = width * length;

  return area;
};

console.warn(`
Stiind ca un camp dreptunghiular de hamei produce 25kg/m2 , ce diferenta de productie este intre un teren de 100m pe 250m si unul de 350m pe 200m?
`);
let field1Length = 100;
let field1Width = 250;
let field2Length = 350;
let field2Width = 200;
let barleyYield = 25; // kg/m2
let beerYield = 2.5 / 10; // l

const field1Yield =
  calculateRectangleArea(field1Width, field1Length) * barleyYield;
const field2Yield =
  calculateRectangleArea(field2Width, field2Length) * barleyYield;
console.log(field2Yield - field1Yield);

// m2 * kg/m2

console.warn(`
Stiind ca din 10kg de hamei produc 2.5l de bere, cati litri de bere va produce un teren de 400m pe 370m?
`);
const field3Yield = calculateRectangleArea(400, 370) * barleyYield;
const field3BeerYield = field3Yield * beerYield;
console.log(field3BeerYield);

console.warn(`
Stiind ca un camp dreptunghiular de grau produce 32kg/m2  de faina, afla si afiseaza cate kilograme de paine produce un camp de 300 pe 200 metri, stiind ca dintr-un kilogram de faina ies 2.5 kg de paine.
`);
const width = 200; // meters
const length = 300; // meters

const area = calculateRectangleArea(width, length);

const wheatProductionPerM2 = 32; // kg/m2

const totalWheatProduction = area * wheatProductionPerM2; // kilograms

const wheatToBreadRatio = 2.5; // kg of bread per kg of wheat

const totalBreadProduction = totalWheatProduction * wheatToBreadRatio; // kilograms

console.log(totalBreadProduction);

console.warn(`
Dar doua campuri de 150 pe 200 si 500 pe 300 in total?
`);
const width1 = 150;
const length1 = 200;

const width2 = 500;
const length2 = 300;

const area1 = calculateRectangleArea(width1, length1);
const area2 = calculateRectangleArea(width2, length2);
const totalArea = area1 + area2;

const wheatProductperM2 = 32;

const totalWheatProduct = totalArea * wheatProductperM2;

const breadTowheatRatio = 2.5;

const totalProduct = totalWheatProduct * breadTowheatRatio;

console.log(totalProduct);
