var Thermostat = function(){
  this.temperature = 20;
  this.defaultTemperature = 20;
  this.powerSavemode = true;
  this.defaultMaxTemp = 32;
  this.minTemp = 10;
  this.powerSaveMaxTemp = 25;
  this.colour = "yellow";
};


Thermostat.prototype.increaseTemperature = function() {
  this.temperature = (this.temperature >= this.MaxTemp()) ? this.MaxTemp() : this.temperature + 1;
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
  this.temperature = this.defaultTemperature;
  this.changeColour();
};

Thermostat.prototype.changeColour = function() {
  switch(true) {
    case this.temperature < 18:
      this.colour = "green";
      break;
    case this.temperature < this.powerSaveMaxTemp:
      this.colour = "yellow";
      break;
    case this.temperature >= this.powerSaveMaxTemp:
      this.colour = "red";
  };
};

Thermostat.prototype.setPowersaveMaxTemp = function() {
  this.temperature = (this.temperature > this.powerSaveMaxTemp) ? this.powerSaveMaxTemp : this.temperature
};

Thermostat.prototype.MaxTemp = function() {
  return (this.powerSavemode) ? this.powerSaveMaxTemp : this.defaultMaxTemp
};
