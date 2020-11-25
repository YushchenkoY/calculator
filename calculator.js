const buttons = document.querySelectorAll('button');
const display = document.querySelector('.calculator__display');
buttons.forEach(function(button) {
    button.addEventListener('click', calculate);
});
// document.querySelector('.calculator__display').value = 0;
function calculate(event) {

    const clickedButtonValue = event.target.value;

    if (clickedButtonValue === '=') {
        if (display.value !== '') {
            display.value = eval(display.value);
        }
    // } else if (clickedButtonValue === 'C') {
    //     display.value = '';
    } else {
        display.value += clickedButtonValue;
    }
}