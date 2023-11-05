const counter = document.getElementById("counter");
const clickCounter= document.getElementById("clickerCounter");
let autoClickerPurchase = document.getElementById("autoClickerBuyBtn");
let autoClickerPrice = 10;
let clicks = 0;
let autoClicker = 0;
function increment(){
    clicks++;
    counter.innerHTML = clicks; 
    clickCounter.innerHTML = autoClicker;
    
}
function purchaseAutoClicker(){
    if (clicks >= autoClickerPrice){
        clicks-= autoClickerPrice;
        autoClicker ++;
        autoClickerPrice =Math.round (autoClickerPrice*1.1);
        counter.innerHTML = clicks;
        clickCounter.innerHTML = autoClicker;
        autoClickerPurchase.innerHTML =`auto clicker ${autoClickerPrice} donuts`;
        setInterval(() => {
        increment()
        }, 1000);
    }
}
function reset(){
    clicks = 0;
    counter.innerHTML = clicks;
    autoClicker = 0;
    clickCounter.innerHTML = autoClicker;

}

document.addEventListener('DOMContentLoaded', function*() {})
