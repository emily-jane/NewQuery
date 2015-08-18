$( document ).ready(function() {
  thermostat = new Thermostat();

  var setTempColour = function(){
    $("#temperature").html(thermostat.temperature);
    $("#temperature").css("color", thermostat.colour);
  };

  setTempColour();

  $("#increase").click(function(){
    thermostat.increaseTemperature();
    setTempColour();
  });

  $("#decrease").click(function(){
      thermostat.decreaseTemperature();
      setTempColour();
  });

  $("#reset").click(function(){
      thermostat.resetTemperature();
      setTempColour();
  });

  $("#power_save").click(function(){
    ($("#power_save").is(":checked")) ? thermostat.powerSavemodeOn() : thermostat.powerSavemodeOff();
  });

});
