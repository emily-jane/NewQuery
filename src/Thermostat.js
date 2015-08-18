var Thermostat = function(){
  this.temperature = 20;
  this.powerSavemode = true;
  this.defaultMaxTemp = 32;
  this.minTemp = 10;
  this.powerSaveMaxTemp = 25;
  this.colour = "yellow";
};

Thermostat.prototype.increaseTemperature = function(){
  if (this.powerSavemode) {
    this.temperature = (this.temperature >= this.powerSaveMaxTemp) ? this.powerSaveMaxTemp :  this.temperature += 1;
  } else {
    this.temperature = (this.temperature >= this.defaultMaxTemp) ? this.defaultMaxTemp :  this.temperature += 1;
  }
  this.changeColour();
};

Thermostat.prototype.decreaseTemperature = function(){
  this.temperature = (this.temperature <= this.minTemp) ? this.minTemp :  this.temperature -= 1;
  this.changeColour();
};

Thermostat.prototype.powerSavemodeOff = function(){
  this.powerSavemode = false;
};

Thermostat.prototype.powerSavemodeOn = function(){
  this.powerSavemode = true;
  this.setPowersaveMaxTemp();
};

Thermostat.prototype.resetTemperature = function(){
  this.temperature = 20;
  this.changeColour();
};

Thermostat.prototype.changeColour = function(){
  if (this.temperature >= 25) {
    this.colour = "red";
  }
  if (this.temperature < 25) {
    this.colour = "yellow";
  }
  if (this.temperature < 18) {
    this.colour = "green";
  }

};

Thermostat.prototype.setPowersaveMaxTemp = function() {
  this.temperature = (this.temperature > this.powerSaveMaxTemp) ? this.powerSaveMaxTemp : this.temperature
};
