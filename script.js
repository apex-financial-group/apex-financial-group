setInterval(() => {

let sp500 =
5300 + Math.floor(Math.random()*20);

let nasdaq =
16900 + Math.floor(Math.random()*50);

let btc =
65000 + Math.floor(Math.random()*500);

document.getElementById("sp500").innerHTML =
sp500;

document.getElementById("nasdaq").innerHTML =
nasdaq;

document.getElementById("btc").innerHTML =
btc;

},2000);