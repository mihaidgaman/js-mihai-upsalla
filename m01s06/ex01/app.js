const car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  isTrunkOpen: false,
  areLightsOn: true,
  topSpeed: 160,
  topReverseSpeed: -20,

  accelerate: function () {
    this.speed++;
  },

  decelerate: function () {
    this.speed--;
  },

  openTrunk: function () {
    this.isTrunkOpen = true;
  },

  closeTrunk: function () {
    this.isTrunkOpen = false;
  },

  turnLightsOn: function () {
    this.areLightsOn = true;
  },

  turnLightsOff: function () {
    this.areLightsOn = false;
  },

  flashLights: function () {
    // pastrarea keywordului this
    // metoda 1 pre -2016
    const self = this;
    self.turnLightsOn();

    window.setTimeout(function () {
      self.turnLightsOff();
    }, 1000 * 2);
  },
};

console.warn(`
Afiseaza propozitia: "Masina era marca make si se deplasa cu speed km/h.".
`);
console.log(`Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h.`);

console.warn(`
Decelereaza masina cu 5 unitati apoi afisaza propozitia: "Viteza noua este speed km/h".
`);
function decelerateCar(car, units) {
  car.speed -= units;
}

decelerateCar(car, 5);

console.log(`Viteza noua este ${car.speed} km/h.`);

console.warn(`
Adauga o proprietate numita topSpeed si asigneaza-i valoarea 160.
`);
car.topSpeed = 160;
console.log(car.topSpeed);

console.warn(`
Adauga o proprietate numita topReverseSpeed si asigneaza-i valoarea -50.
`);
car.topReverseSpeed = -50;
console.log(car.topReverseSpeed);

console.warn(`
Adauga o metoda numita stop() care sa faca proprietatea speed 0, apoi afiseaza viteza.
`);
car.stop = function () {
  this.speed = 0;
};
car.stop();
console.log(`Viteza dupa oprire este ${car.speed} km/h.`);

console.warn(`
Adauga  o metoda numita setSpeed() care sa poata primi un parametru fix pentru viteza. Metoda trebuie sa verifice ca nu se depasesc limitele inferioare si superioare, caz in care se folosesc proprietatile topSpeed si topReverseSpeed
`);
car.setSpeed = function () {
  this.speed = 0;
};
car.setSpeed = function (newSpeed) {
  // Verifică limitele inferioare și superioare pentru noua viteză
  if (newSpeed >= this.topReverseSpeed && newSpeed <= this.topSpeed) {
    this.speed = newSpeed;
    console.log(`Viteza a fost setată la ${this.speed} km/h.`);
  } else if (newSpeed > this.topSpeed) {
    this.speed = this.topSpeed;
    console.log(`Viteza a fost limitată la ${this.speed} km/h.`);
  } else if (newSpeed < this.topReverseSpeed) {
    this.speed = this.topReverseSpeed;
    console.log(`Viteza a fost limitată la ${this.speed} km/h.`);
  }
};

car.setSpeed(75);
car.setSpeed(180);
car.setSpeed(-30);
