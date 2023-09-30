function calculateSurface(width, length) {
  if (arguments.length === 2) {
    return width * length;
  } else {
    return width ** 2;
  }
}

console.warn(`
Creeaza un wrapper numit calculateSquareSurface() pentru calculateSurface(), care sa primeasca un singur parametru si sa calculeze suprafata unui patrat.
`);

function calculateSquareSurface(side) {
  return calculateSurface(side);
}

function calculateRectangleSurface(width, length) {
  return calculateSurface(width, length);
}

console.log(calculateSurface(4));
console.log(calculateSurface(8, 9));
