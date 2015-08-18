describe('Thermostat', function(){

    beforeEach(function() {
       thermostat = new Thermostat();
     });

  var thermostat;

  describe('thermostat should show current termperature', function(){

    it('thermostat starts at 20 degrees', function(){
      expect(thermostat.temperature).toBe(20);
    });

  });

  describe('Thermostat temperature value can be modified', function(){

    it('temperature can be increased', function(){
      for (i = 0; i < 6; i++) {
      thermostat.increaseTemperature();
      }
      expect(thermostat.temperature).toBe(25);
    });

    it('temperature can be decreased', function(){
      for (i = 0; i < 5; i++) {
      thermostat.decreaseTemperature();
      }
      expect(thermostat.temperature).toBe(15);
    });

    it('temperature can not be below 10 degrees', function(){
      for (i = 0; i < 11; i++) {
      thermostat.decreaseTemperature();
      }
      expect(thermostat.temperature).toBe(10)
    });

    it('temperature can not exceed 25 degrees when power saving mode is on', function(){
      for (i = 0; i < 6; i++) {
      thermostat.increaseTemperature();
      }
      expect(thermostat.temperature).toBe(25)
    });

    it('temperature can not exceed 32 degrees when power saving mode is off', function(){
      thermostat.powerSavemode = false;
      for (i = 0; i < 13; i++) {
      thermostat.increaseTemperature();
      }
      expect(thermostat.temperature).toBe(32)
    });

  });

  describe('power save mode ', function(){

    it('is on by default', function(){
      expect(thermostat.powerSavemode).toBe(true);
    });

    it('can be turned off', function(){
      thermostat.powerSavemodeOff();
      expect(thermostat.powerSavemode).toBe(false);
    });

    it('can be turned on', function(){
      thermostat.powerSavemodeOff();
      thermostat.powerSavemodeOn();
      expect(thermostat.powerSavemode).toBe(true);
    });

  });

  describe('thermostat reset', function(){

    it('can be reset to 20', function(){
      thermostat.increaseTemperature();
      thermostat.resetTemperature();
      expect(thermostat.temperature).toBe(20);
    });

  });

  describe('thermostat display colour', function(){

    it('to be colour green when temperature is < 18', function(){
      thermostat.decreaseTemperature();
      thermostat.decreaseTemperature();
      thermostat.decreaseTemperature();
      expect(thermostat.colour).toBe("green");
    });

    it('to be colour red when temperature is >= 25', function(){
      for (i = 0; i < 5; i++) {
      thermostat.increaseTemperature();
      }
      expect(thermostat.colour).toBe("red");
    });

    it('to be colour yellow by default', function(){
      expect(thermostat.colour).toBe("yellow");
    });

  });


});
