class Mission {
    //construct props
    constructor(fuelLevel, O2Level,foodLevel,spaceCraft,launchDateMo,launchDateDa,launchDateYr,numOfAstronauts){
        this.fuelLevel = fuelLevel;
        this.O2Level = O2Level;
        this.foodLevel = foodLevel;
        this.spaceCraft = spaceCraft;
        this.launchDateMo = launchDateMo;
        this.launchDateDa = launchDateDa;
        this.launchDateYr = launchDateYr;
        this.numOfAstronauts = numOfAstronauts;
    }
    //construct methods
    launch(){
        alert("SpaceCraft " + this.spaceCraft +" is lifting off!");
    }
    disMissionLaunchDate(){
        alert("SpaceCraft " + this.spaceCraft +" is lifting off on "
        + this.launchDateMo + " " + this.launchDateDa + ", " + this.launchDateYr);
    }
   consumeFood(consumeAmt){
        this.foodLevel = this.foodLevel - consumeAmt;
        alert("The new food Level is " + this.foodLevel);
    }
}

class SpaceCraft{
    //build the states
    constructor(name, velocity, numOfAstronauts){
        this.name = name;
        this. velocity = velocity;
        this.numOfAstronauts = numOfAstronauts;
    }
    //build the methods
    craftInfo(){
        document.getElementById("ship1Info").innerHTML = "The spacecraft " + this.name + "is travelling at " +
            this.velocity + " m/s and contains " + this.numOfAstronauts + " astronauts."; 
}
accelerate(acc,time){
    this.velocity = this.velocity + (acc * time);
    return this.velocity;
}
addAstronauts(numAdded){
    this.numOfAstronauts = this.numOfAstronauts + numAdded;
    return this.numOfAstronauts;
}
varAccel(){
    var accel = document.getElementById("formIncVelocity").value;
    var time1 = document.getElementById("formIncTime").value;
    var acc = parseInt(accel);
    var time = parseInt(time1);
    this.accelerate(acc,time);
}
varAddAstro(){
    var astro = document.getElementById("formNumAstro").value;
    var astro1 = parseInt(astro);
    this.addAstronauts(astro1);
}
}