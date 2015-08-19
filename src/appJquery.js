$(document).ready(function(){
  thermostat = new Thermostat();

  var setTempColour = function(){
    $("#temperature").html(thermostat.temperature);
    $("#temperature").css("color", thermostat.colour);
  };

  var showWeather = function(result){
   $("#weather").html(("City: "+result.name + " Weather: "+result.main.temp
      +result.weather[0].description ));
   var weatherImage = (result.weather[0].icon)
   $("#weatherImage").html("<img src='http://openweathermap.org/img/w/"+weatherImage+".png' />")
  };

  var weatherCall = function(){
     $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=london&units=metric&APPID=b5d17c3afa857ebbab97b63ae2330336",function(result){
    showWeather(result);
    });
  };

  setTempColour();
  weatherCall();

  $('button[data-temp-control="up"]').click(function(){
    thermostat.increaseTemperature();
    setTempColour();
  });

  $('button[data-temp-control="down"]').click(function(){
    thermostat.decreaseTemperature();
    setTempColour();
  });

  $('button[data-temp-control="reset"]').click(function(){
    thermostat.resetTemperature();
    setTempColour();
  });

  $('input[data-temp-control="powersave"]').click(function(){
    ($('input[data-temp-control="powersave"]').is(":checked")) ? thermostat.powerSavemodeOn() : thermostat.powerSavemodeOff();
    setTempColour();
  });
});
