thermostat = new Thermostat();

var temperature = document.getElementById('temperature');
  temperature.innerHTML = thermostat.temperature;

var upTemperature = document.getElementById('increase');
  upTemperature.onclick = function() {
    thermostat.increaseTemperature();
    temperature.innerHTML = thermostat.temperature;
  };

var downTemperature = document.getElementById('decrease');
  downTemperature.onclick = function() {
    thermostat.decreaseTemperature();
    temperature.innerHTML = thermostat.temperature;
  };

var resetTemperature = document.getElementById('reset');
  resetTemperature.onclick = function() {
    thermostat.resetTemperature();
    temperature.innerHTML = thermostat.temperature;
  };

var powerSaveStatus = document.getElementById('power_save');

  powerSaveStatus.onclick = function() {
  if (powerSaveStatus.checked) {
    thermostat.powerSavemodeOn();
    temperature.innerHTML = thermostat.temperature;
  } else {
    thermostat.powerSavemodeOff();
  }
};