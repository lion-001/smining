/***** Mining Features BTC, LTC & DOGE Count++ *****/
var bitcoin = document.getElementById("btc");
var litecoin = document.getElementById("ltc");
var dogecoin = document.getElementById("doge");
function btc() {
    if(count1 >= 999999999.00000000) {
    clearInterval(myint1);
    count1 = 0.00000000;
    } else {
    count1 = count1 + 0.00001000;
	bitcoin.textContent = count1.toFixed(8);
    }
    };
var count1 = 0.00000000;
var myint1 = setInterval(btc,10);


function ltc() {
    if(count2 >= 999999999.00000000) {
    clearInterval(myint2);
    count2 = 0.00000000;
    } else {
    count2 = count2 + 0.00010000;
	litecoin.textContent = count2.toFixed(8);
    }
    };
var count2 = 0.00000000;
var myint2 = setInterval(ltc,10);


function doge() {
    if(count3 >= 999999999.00000000) {
    clearInterval(myint3);
    count3 = 0.00000000;
    } else {
    count3 = count3 + 0.01000000;
	dogecoin.textContent = count3.toFixed(8);
    }
    };
var count3 = 0.00000000;
var myint3 = setInterval(doge,10);
/***** Mining Features BTC, LTC & DOGE Count++ *****/