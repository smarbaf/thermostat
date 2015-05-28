describe('Thermostat', function()  {

 var thermostat;

   beforeEach(function()   {
     thermostat = new Thermostat();
   });

 describe('a new thermostat', function()  {

   it('is set to a temperature of 20', function()   {
     expect(thermostat.temp).toBe(20);
   });

    it('has a minimum temperature of 10', function()   {
         expect(thermostat.minTemp).toBe(10)
    });

    it('has a maximum temperature of 25 with Power Saving mode on', function()  {
     expect(thermostat.powerSave).toBe(true);
     expect(thermostat.maxTemp).toBe(25)
   });


   it('it has a button to increase the temperature by one', function()   {
     thermostat.increase()
     expect(thermostat.temp).toBe(21);
   });

    it('it has a button to decrease the temperature by one', function()   {
         thermostat.decrease()
         expect(thermostat.temp).toBe(19);
       });

    it('has a maximum temperature of 32 with Power Saving mode off', function() {
         thermostat.powerSaveButton()
         expect(thermostat.maxTemp).toBe(32);
       });

    it('has a maximum temperature of 25 with Power Saving mode on', function() {
          thermostat.maxTemp = 32
          thermostat.powerSave = false
          thermostat.powerSaveButton()
          expect(thermostat.maxTemp).toBe(25);
           });

     it('has a button to reset it back to default', function()  {
       thermostat.increase()
       thermostat.powerSaveButton()
       thermostat.resetTherm()
       expect(thermostat.temp).toBe(20);
       expect(thermostat.maxTemp).toBe(25);
       expect(thermostat.powerSave).toBe(true);
     });

     it('does not allow the temperature to drop below minimum', function()  {
        thermostat.temp = 10
        thermostat.decrease()
        expect(thermostat.temp).toBe(10)
     });

     it('does not allow temperature above 32 with Power Save mode off', function()  {
        thermostat.powerSaveButton()
        expect(thermostat.maxTemp).toBe(32)
     });

     it('does not allow temperature above 25 with Power Save mode on', function()  {
        thermostat.temp = 25
        thermostat.increase()
        expect(thermostat.maxTemp).toBe(25)
     });

     it('resets the temperature to 25 if higher when Power Save mode goes on', function()  {
        thermostat.powerSaveButton()
        thermostat.temp = 26
        thermostat.powerSaveButton()
        expect(thermostat.temp).toBe(25)
     });
 });

  describe('the thermostat changes color according to heat index', function() {
    it('is green when the temperature is less than 18', function() {
      for(i = 1; i < 4; i ++) {
        thermostat.decrease();
    };
      expect(thermostat.colour).toEqual('Green')
    });
    it('Red when greater than 24 degrees', function () {
      for(i = 1; i < 6; i ++) {
        thermostat.increase();
      };
      expect(thermostat.colour).toEqual('Red')
    });
    it('Yellow for any other temperature', function () {
      expect(thermostat.colour).toEqual('Yellow')
    });
  });
});


