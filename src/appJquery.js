$( document ).ready(function() {
  thermostat = new Thermostat();

  var setTempColour = function(){
    $("#temperature").html(thermostat.temperature);
    $("#temperature").css("color", thermostat.colour);
  };

  setTempColour();

  $("button:eq(0)").click(function() {
    thermostat.increaseTemperature();
    setTempColour();
  });

  $("button:eq(1)").click(function() {
    thermostat.decreaseTemperature();
    setTempColour();
  });

  $("button:eq(2)").click(function() {
    thermostat.resetTemperature();
    setTempColour();
  });

  $('input[type="checkbox"]').eq(0).click(function() {
    ($('input[type="checkbox"]').eq(0).is(":checked")) ? thermostat.powerSavemodeOn() : thermostat.powerSavemodeOff();
    setTempColour();
  });
});
