let count = 0;

const countDisplay = document.getElementById('count');
const btnIncrease = document.getElementById('btnIncrease');
const btnDecrease = document.getElementById('btnDecrease');
const btnReset = document.getElementById('btnReset');

function updateDisplay() {
    countDisplay.textContent = count;

    if (count > 0) {
        countDisplay.style.color = '#4CAF50';
    } else if (count < 0) {
        countDisplay.style.color = '#f44336';
    } else {
        countDisplay.style.color = '#333';
    }
}

btnIncrease.addEventListener('click', () => {
    count++;
    updateDisplay();
});

btnDecrease.addEventListener('click', () => {
    count--;
    updateDisplay();
});

btnReset.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});