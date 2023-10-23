class Vehicle {
  constructor(
    make,
    color,
    wheels,
    speed,
    topSpeed = 160,
    topReverseSpeed = -50,
  ) {
    this.make = make;
    this.color = color;
    this.speed = speed;
    this.wheels = wheels;
    this.topSpeed = topSpeed;
    this.topReverseSpeed = topReverseSpeed;
    this.areLightsOn = false;
  }

  turnLightsOn() {
    this.areLightsOn = true;
  }

  turnLightsOff() {
    this.areLightsOn = false;
  }

  displaySpeed() {
    console.log(`Viteza curenta este: ${this.speed}.`);
  }

  accelerate() {
    this.setSpeed(this.speed + 1);
  }

  decelerate() {
    this.setSpeed(this.speed - 1);
  }

  setSpeed(speed = 5) {
    if (speed > this.topSpeed) {
      speed = this.topSpeed;
    }

    if (speed < this.topReverseSpeed) {
      speed = this.topReverseSpeed;
    }

    this.speed = speed;
    this.displaySpeed();
  }

  flashLights() {
    this.turnLightsOn();
    setTimeout(() => {
      this.turnLightsOff();
    }, 2000);
  }
}

class Car extends Vehicle {
  constructor(make, color, speed, topSpeed, topReverseSpeed) {
    super(make, color, 4, speed, topSpeed, topReverseSpeed);
  }
}

class Bicycle extends Vehicle {
  constructor(make, color, speed, topSpeed) {
    super(make, color, 2, speed, topSpeed, 0);
  }

  // // exemplu naiv de polimorfism
  // decelerate() {
  //   if (--this.speed < 0) {
  //     this.speed = 0;
  //   }

  //   this.displaySpeed();
  // }
}

const bike = new Bicycle('Pegas', 'red', 8, 20);
bike.setSpeed(2);

bike.decelerate();
bike.decelerate();
bike.decelerate();

class Tricycle extends Vehicle {
  constructor(make, color, speed, topSpeed) {
    super(make, color, 3, speed, topSpeed);
    this.topReverseSpeed = 0;
  }
}

const trike = new Tricycle('Tryke', 'red', 2, -2);
trike.setSpeed(0);

trike.decelerate();
trike.decelerate();
trike.decelerate();
