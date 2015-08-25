thermostat = new Thermostat();

document.getElementById('temperature').style.color = thermostat.colour;

var temperature = document.getElementById('temperature');
  temperature.innerHTML = thermostat.temperature;

var upTemperature = document.getElementById('increase');
  upTemperature.onclick = function() {
    thermostat.increaseTemperature();
    temperature.innerHTML = thermostat.temperature;
    document.getElementById('temperature').style.color = thermostat.colour;
  };

var downTemperature = document.getElementById('decrease');

downTemperature.onclick = function() {
    thermostat.decreaseTemperature();
    temperature.innerHTML = thermostat.temperature;
    document.getElementById('temperature').style.color = thermostat.colour;
  };

var resetTemperature = document.getElementById('reset');
  resetTemperature.onclick = function() {
    thermostat.resetTemperature();
    temperature.innerHTML = thermostat.temperature;
    document.getElementById('temperature').style.color = thermostat.colour;
  };

var powerSaveStatus = document.getElementById('power_save');
  powerSaveStatus.onclick = function() {
    (powerSaveStatus.checked) ? thermostat.powerSavemodeOn() : thermostat.powerSavemodeOff();
};

