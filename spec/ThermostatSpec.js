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

});
