let currentCount = 0;

function updateCount() {
    document.getElementById("counterDisplay").textContent = currentCount;
};

document.getElementById("plusOne").onclick = function() {
    currentCount += 1;
    updateCount();
};

document.getElementById("plusFive").onclick = function() {
    currentCount += 5;
    updateCount();
};

document.getElementById("minus").onclick = function() {
    currentCount -= 1;
    updateCount();
};

document.getElementById("reset").onclick = function() {
    currentCount = 0;
    updateCount();
};

let currentRecords = ""

document.getElementById("save").onclick = function () {
    currentRecords = currentCount + ", ";
    document.getElementById("recordsDisplay").textContent += currentRecords;
    currentCount = 0;
    updateCount();    
};