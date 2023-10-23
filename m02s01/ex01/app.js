// syntatic sugar
// js nu are clase

class Car {
  //notatia 1
  topSpeed = 160;
  topReverseSpeed = -50;

  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.isTrunkOpen = false;
    this.areLightsOn = false;
  }

  accelerate() {
    this.speed++;
  }

  decelerate() {
    this.speed--;
  }

  stop() {
    this.speed = 0;
    console.log(`Viteza noua este: ${this.speed}.`);
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      speed = this.topSpeed;
    }

    if (speed < this.topReverseSpeed) {
      speed = this.topReverseSpeed;
    }

    this.speed = speed;
  }

  openTrunk() {
    this.isTrunkOpen = true;
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }

  turnLightsOn() {
    this.areLightsOn = true;
  }

  turnLightsOff() {
    this.areLightsOn = false;
  }

  flashLights() {
    const self = this;
    self.turnLightsOn();

    window.setTimeout(function () {
      self.turnLightsOff();
    }, 1000 * 2);
  }
}

const audi = new Car('Audi', 'black', 4, 50);
const opel = new Car('Opel', 'red', 4, 3);

const cars = [audi, opel];
// sa vedem bucla pe tema

cars.forEach(function (car) {
  console.log(
    `Marca: ${car.make}, Culoare: ${car.color}, Viteza: ${car.speed}`,
  );
  console.log(`Portbagaj deschis: ${car.isTrunkOpen ? 'Da' : 'Nu'}`);
  console.log(`Luminile sunt aprinse: ${car.areLightsOn ? 'Da' : 'Nu'}`);
});

cars.forEach(function (car) {
  car.decelerate();
  console.log(`Viteza noua este ${car.speed} km/h.`);
});
