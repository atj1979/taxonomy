var ForagerBee = function() {
  Grub.call(this);
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = []; 
  this.age = 10;
  this.color = 'yellow'; 
};
ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.forage = function (value){
  this.treasureChest.push(value);
};
ForagerBee.prototype.constructor = ForagerBee;

