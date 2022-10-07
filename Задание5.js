// Задание 5

class Electro {
  constructor(power) {
  this.brand = 'Philips';
  this.category = 'Home';
  this.power = power
 }
  turnOn(){
    console.log('turnedOn')  // Не удалось вывести в консоль методы внутри объектов
  }
};

class Lamp extends Electro {
  constructor(power) {
  super(power);
  this.price = 1500
 }
  turnOn(){
    console.log('Light')
  }
};

const lamp = new Lamp(60);
const ledLamp = new Lamp(5);

class Hoover extends Electro {
  constructor(power) {
  super(power);
  this.price = 5000
 }
  turnOn(){
  console.log('Woooo')
}
};

const hoover = new Hoover(100);
const verticalHoover = new Hoover(18);

console.log(lamp, ledLamp, hoover, verticalHoover);
