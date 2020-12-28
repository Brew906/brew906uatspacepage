// this is the new buttons function for the data chart
function start(){
    document.getElementById("data").rows["seconds"].innerHTML="Reading Data........";
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    index = 0;
    timer =setInterval(updateDisplay, time_interval);
}

function stop(){
    clearInterval(timer);
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
  
}
 


// this is the code for the countdown timer
function countdownTimerRunn(){
    var currTime = 50;
    setTimeout(function(){
        document.getElementById("paratag").innerHTML = currTime + " seconds left";
        currTime = currTime - 5;
        }, 1000);
    setTimeout(function(){
        document.getElementById("paratag").innerHTML = currTime + " seconds left";
        currTime = currTime - 5;
        }, 6000);
    setTimeout(function(){
        document.getElementById("paratag").innerHTML = currTime + " seconds left";
        currTime = currTime - 5;
        }, 11000);
    setTimeout(function(){
        document.getElementById("paratag").innerHTML = currTime + " seconds left";
        currTime = currTime - 5;
        }, 16000);
    setTimeout(function(){
        document.getElementById("paratag").innerHTML = currTime + " seconds left";
        currTime = currTime - 5;
        }, 21000);
    setTimeout(function(){
        document.getElementById("paratag").innerHTML = currTime + " seconds left";
        currTime = currTime - 5;
        }, 26000);
    setTimeout(function(){
        document.getElementById("paratag").innerHTML = currTime + " seconds left";
        currTime = currTime - 5;
        }, 31000);
    setTimeout(function(){
        document.getElementById("paratag").innerHTML = currTime + " seconds left";
        currTime = currTime - 5;
        }, 36000);
    setTimeout(function(){
        document.getElementById("paratag").innerHTML = currTime + " seconds left";
        currTime = currTime - 5;
        }, 41000);
    setTimeout(function(){
        document.getElementById("paratag").innerHTML = currTime + " seconds left";
        currTime = currTime - 5;
        }, 46000);
    setTimeout(function(){
        document.getElementById("paratag").innerHTML = "BLAST OFF!!!!!!"
     }, 51000);
     setTimeout(function(){ImageSrc="pngtree-cartoon-blue-little-rocket-image_1245136.jpg"},52000);
    } 

    //this is the code for the security login page
    function checkCred(){
        var firstName = document.getElementById("fname").value;
        var lastName = document.getElementById("lname").value;
        var badgeNumber = document.getElementById("badgeID").value;
        var fullname = firstName + " " + lastName;
    //this will define the login criteria 
        if (fullname.length > 20) {
            document.getElementById("loginStatus").innerHTML = "full name is too long, must be less than 20 characters";
        } else if (badgeNumber > 999 || badgeNumber < 0) {
            document.getElementById("loginStatus").innerHTML = "Invaild Badge Number !!";
        } else {
            alert("welcome to UATspace, " + fullname);
            location.replace("UatBlastoffCountdownCopy.html");
        }
    }
    //this will allow sound to play on the Html page
    function sound (src){
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload" ,"audio");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        this.play = function(){
            this.sound.play();
        }
        this.stop = function(){
            this.sound.pause();
        }
    }
    //this is the call function for the play sound button on the Html page
    function playStation(){
        mySound = new sound("us-lab-background.mp3");
        mySound.play();
    }
    function playStationoff(){
        mySound.stop();
}

class InputData {
     constructor(
         time_seconds,
         latitude,
         longitude,
         gps_altitude,
         bmpSensor_altitude,
         bmpSensor_pressure,
         bmpSensor_temperature,
         digSensor_temperature,
         cssSensor_temperature,
         cssSensor_eCO2,
         cssSensor_TVOC,
         UV,
         accelX,
         accelY,
         accelZ,
         magneticX,
         magneticY,
         magneticZ,
         gyroX,
         gyroY,
         gyroZ
     ){
         this.time_seconds = time_seconds;
         this.latitude = latitude;
         this.longitude = longitude;
         this.gps_altitude = gps_altitude;
         this.bmpSensor_altitude = bmpSensor_altitude;
         this.bmpSensor_pressure = bmpSensor_pressure;
         this.bmpSensor_temperature = bmpSensor_temperature;
         this.digSensor_temperature = digSensor_temperature;
         this.cssSensor_temperature = cssSensor_temperature;
         this.cssSensor_eCO2 = cssSensor_eCO2;
         this.cssSensor_TVOC = cssSensor_TVOC;
         this.UV = UV;
         this.accelX = accelX;
         this.accelY = accelY;
         this.accelZ = accelZ;
         this.magneticX = magneticX;
         this.magneticY = magneticY;
         this.magneticZ = magneticZ;
         this.gyroX = gyroX;
         this.gyroY = gyroY;
         this.gyroZ = gyroZ;
     }
     }

     function getData(){
         var loadedData = loadData();
         return loadedData;
     }
     function dataRow(legend, value, units){
         msg = "<td>";
         msg += legend;
         msg += ": </td><td>";
         msg += value;
         msg += " " + units;
         msg += "</td>";
         return msg;
     }