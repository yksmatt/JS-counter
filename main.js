let currentCount = 0;

function updateCount() {
    document.getElementById("counterDisplay").innerHTML = currentCount;
}

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
}