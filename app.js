// document.getElementById("counter-display").innerText = 5;

let counterDisplay = document.getElementById("counter-display");
let currentCount = 0;

function plusOne() {
    currentCount += 1;
    counterDisplay.innerText = currentCount;
};

function plusFive() {
    currentCount += 5;
    counterDisplay.innerText = currentCount;
};

function reset() {
    currentCount = 0;
    counterDisplay.innerText = currentCount;
};