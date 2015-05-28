function Thermostat(){
  this.temp = 20
  this.maxTemp = 25
  this.minTemp = 10
  this.powerSave = true
  this.colour = 'Yellow'
};


Thermostat.prototype.increase = function() {
  if((this.powerSave === true && this.temp < 25) || (this.powerSave === false && this.temp < 32)) this.temp += 1
    this.changeColour();
};

Thermostat.prototype.decrease = function() {
  if(this.temp > 10) this.temp -= 1
  this.changeColour();
};


Thermostat.prototype.resetTherm = function() {
  this.temp = 20;
  this.maxTemp = 25;
  this.powerSave = true;
};

Thermostat.prototype.powerSaveButton = function() {
  if(this.powerSave === true) {
    this.maxTemp = 32;
    this.powerSave = false;
  }
  else{
    this.maxTemp = 25;
    this.powerSave = true;
    this.temp = 25;
  }
};

Thermostat.prototype.changeColour = function() {
  if(this.temp < 18) {
    this.colour = 'Green';
  }
  else if(this.temp > 24) {
    this.colour = 'Red';
  }
  else {
    this.colour = 'Yellow';
  };
};

Thermostat.prototype.update = function() {
   document.body.style.background = this.colour;
   document.getElementById('temp').innerHTML = thermostat.temp + " " + this.colour;

};

thermostat = new Thermostat

