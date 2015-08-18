$( document ).ready(function() {
  thermostat = new Thermostat();

  $("#temperature").html(thermostat.temperature);
  $("#temperature").css("color", thermostat.colour);

  $("#increase").click(function(){

    thermostat.increaseTemperature();
    $("#temperature").html(thermostat.temperature);
    $("#temperature").css("color", thermostat.colour);

  });

  $("#decrease").click(function(){

      thermostat.decreaseTemperature();
      $("#temperature").html(thermostat.temperature);
      $("#temperature").css("color", thermostat.colour);

  });

  $("#reset").click(function(){
      thermostat.resetTemperature();
      $("#temperature").html(thermostat.temperature);
      $("#temperature").css("color", thermostat.colour);

  });

  $("#power_save").click(function(){
    ($("#power_save").is(":checked")) ? thermostat.powerSavemodeOn() : thermostat.powerSavemodeOff();

  });

});
