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

 });

})