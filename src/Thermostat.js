var Thermostat = function(){
  this.temperature = 20;
  this.powerSavemode = true;
  this.defaultMaxTemp = 32;
  this.minTemp = 10;
  this.powerSaveMaxTemp = 25;
};

Thermostat.prototype.increaseTemperature = function(){
  if (this.powerSavemode) {
    this.temperature = (this.temperature >= this.powerSaveMaxTemp) ? this.powerSaveMaxTemp :  this.temperature += 1;
  } else {
    this.temperature = (this.temperature >= this.defaultMaxTemp) ? this.defaultMaxTemp :  this.temperature += 1;
  }

};

Thermostat.prototype.decreaseTemperature = function(){
  this.temperature = (this.temperature <= this.minTemp) ? this.minTemp :  this.temperature -= 1;

};
