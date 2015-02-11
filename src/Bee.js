var Bee = function() {
  //these lines modifing and making new properties 
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
  
};
//this line is adding the methods on Grub basically
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;