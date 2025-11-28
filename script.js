const display = document.getElementById('display');

function appendToDisplay(input) {
    if (display.textContent === '0' && input !== '.') {
        display.textContent = input;
    } else {
        display.textContent += input;
    }
}

function clearDisplay() {
    display.textContent = '0';
}

function calculateResult() {
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = 'Error';
    }
}
