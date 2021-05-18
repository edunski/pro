
var counter = 1;

function dotb(){
    if (counter==1){
        counter++;
        document.getElementById("dotb").style.backgroundColor = "blue";
        document.getElementById("dtkm").innerHTML = "80.8 million km";
        document.getElementById("food").innerHTML = "172";
        document.getElementById("fuel").innerHTML = "52 920 gallons";
        document.getElementById("water").innerHTML = "450";
        document.getElementById("persons").innerHTML = "1";
    }
}

function dotc(){
    if (counter==2){
        counter++;
        document.getElementById("dotc").style.backgroundColor = "blue";
        document.getElementById("dtkm").innerHTML = "161.6 million km";
        document.getElementById("food").innerHTML = "115.5";
        document.getElementById("fuel").innerHTML = "39 690 gallons";
        document.getElementById("water").innerHTML = "300";
        document.getElementById("persons").innerHTML = "1";
    }
}

function dotd(){
    if (counter==3){
        counter++;
        document.getElementById("dotd").style.backgroundColor = "blue";
        document.getElementById("dtkm").innerHTML = "242.4 million km";
        document.getElementById("food").innerHTML = "57.5";
        document.getElementById("fuel").innerHTML = "26 460 gallons";
        document.getElementById("water").innerHTML = "150";
        document.getElementById("persons").innerHTML = "1";
    }
}

function dote(){
    if (counter==4){
        counter++;
        document.getElementById("dote").style.backgroundColor = "blue";
        document.getElementById("dtkm").innerHTML = "323.21 million km";
        document.getElementById("food").innerHTML = "5";
        document.getElementById("fuel").innerHTML = "13 230 gallons";
        document.getElementById("water").innerHTML = "15.2";
        document.getElementById("persons").innerHTML = "1";
    }
}

var ppl = 2;

var storedforigin;
var storedf = 0;

var storedworigin;
var storedw = 0;

var storedporigin;
var storedp = 0;

var decider = false;
function dotaddpeople(){
    if (decider == false) {
        storedforigin = parseInt(document.getElementById("food").innerHTML);
        storedworigin = parseInt(document.getElementById("water").innerHTML);
        storedporigin = parseInt(document.getElementById("persons").innerHTML);
        decider = true;
    }
    storedf = parseInt(document.getElementById("food").innerHTML);
    storedf = storedforigin * ppl;
    document.getElementById("food").innerHTML = storedf;

    storedw = parseInt(document.getElementById("water").innerHTML);
    storedw = storedworigin * ppl;
    document.getElementById("water").innerHTML = storedw;

    storedp = parseInt(document.getElementById("persons").innerHTML);
    storedw = storedporigin * ppl;
    document.getElementById("persons").innerHTML = storedw;
    ppl++;
}
