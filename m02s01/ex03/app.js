const Car = {
  make: 'Audi',
  color: 'black',
  wheels: 0,
  speed: 0,
  topSpeed: 160,
  topReverseSpeed: -50,

  displaySpeed: function () {
    console.log(`Viteza curenta este: ', ${this.speed}`);
  },

  accelerate: function () {
    this.speed++;

    this.displaySpeed();
  },

  decelerate: function () {
    this.speed--;

    this.displaySpeed();
  },
};

const audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.wheels = 4;
audi.speed = 0;

console.log(audi);
