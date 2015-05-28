thermostat = new Thermostat;

function increaseTemp() {
  thermostat.increase();
  document.getElementById('temp').innerHTML = thermostat.temp
};

function decreaseTemp() {
  thermostat.decrease();
  document.getElementById('temp').innerHTML = thermostat.temp
};

function resetTemp() {
  thermostat.resetTherm();
  document.getElementById('temp').innerHTML = thermostat.temp
};

function powerSave() {
  thermostat.powerSaveButton();
  document.getElementById('temp').innerHTML = thermostat.temp
};

// function changeColour() {
//   thermostat.thisColour();
//   document.getElementById('temp').innerHTML = thermostat.temp
// };



// Thermostat.prototype.update = function() {
//    document.body.style.background = this.colour;
//    document.getElementById('temp').innerHTML = thermostat.temp + " " + this.colour;

// };
