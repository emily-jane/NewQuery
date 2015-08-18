describe('Thermostat', function(){

    beforeEach(function() {
       thermostat = new Thermostat();
     });

  var thermostat;

  describe('temperature', function(){

    it('starts at 20', function(){
      expect(thermostat.temperature).toBe(20);
    });

    it('can be increased', function(){
      for (i = 0; i < 6; i++) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.temperature).toBe(25);
    });

    it('can be decreased', function(){
      for (i = 0; i < 5; i++) {
        thermostat.decreaseTemperature();
      }
      expect(thermostat.temperature).toBe(15);
    });

    it('has min of 10', function(){
      for (i = 0; i < 11; i++) {
        thermostat.decreaseTemperature();
      }
      expect(thermostat.temperature).toBe(10)
    });

    it('caps at 25 with power save on', function(){
      for (i = 0; i < 6; i++) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.temperature).toBe(25)
    });

    it('caps at 32', function(){
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

    it("it sets temp to powersave max if over", function() {
      thermostat.powerSavemodeOff();
      for (i = 0; i < 15; i++) {
        thermostat.increaseTemperature();
      }
      thermostat.powerSavemodeOn();
      expect(thermostat.temperature).toEqual(25);
    })

  });

  describe('thermostat reset', function(){

    it('can be reset to 20', function(){
      thermostat.increaseTemperature();
      thermostat.resetTemperature();
      expect(thermostat.temperature).toBe(20);
    });

    it("when under default", function() {
      for (i = 0; i < 10; i++) {
        thermostat.increaseTemperature();
      }
      thermostat.resetTemperature();
      expect(thermostat.temperature).toEqual(20)
    });

    it("when over default", function() {
      for (i = 0; i < 8; i++) {
        thermostat.decreaseTemperature();
      }
      thermostat.resetTemperature();
      expect(thermostat.temperature).toEqual(20)
    });

  });

  describe('thermostat display colour', function(){

    it('green when < 18', function(){

      for (i = 0; i < 3; i++) {
        thermostat.decreaseTemperature();
      }
      expect(thermostat.colour).toBe("green");
    });

    it('red when >= 25', function(){
      for (i = 0; i < 5; i++) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.colour).toBe("red");
    });

    it('yellow between 18 to 24', function(){
      expect(thermostat.colour).toBe("yellow");
    });

  });

});
