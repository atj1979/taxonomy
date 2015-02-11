var HoneyMakerBee = function() {
  Grub.call(this);
  this.color = 'yellow';
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};
//creating dependancy to grub
HoneyMakerBee.prototype = Object.create(Grub.prototype);
HoneyMakerBee.prototype.makeHoney = function (){
  this.honeyPot+=1;
};
HoneyMakerBee.prototype.giveHoney = function (){
  this.honeyPot--;
};

//change the constructor property, done this way because constructor is really a method
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
