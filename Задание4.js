// Задание 4

function Electro(power) {
  this.brand = 'Philips';
  this.category = 'Home';
  this.power = power
};

Electro.prototype.turnOn = function(turnOn) {
    console.log('turnedOn')
  };

function Lamp(power) {
  this.power = power;
  this.price = 1500
};

Lamp.prototype = new Electro();

Lamp.prototype.turnOn = function(turnOn) {
    console.log('Light')
  };

const lamp = new Lamp(60);
const ledLamp = new Lamp(5);

function Hoover(power) {
  this.power = power;
  this.price = 5000
};

Hoover.prototype = new Electro();

Hoover.prototype.turnOn = function(turnOn) {
  console.log('Woooo')
};

const hoover = new Hoover(100);
const verticalHoover = new Hoover(18);

console.log(lamp, ledLamp, hoover, verticalHoover);
