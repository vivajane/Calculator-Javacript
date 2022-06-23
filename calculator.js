var num1 = window.prompt('Enter a number');
var num2 = window.prompt('Enter another number');



const operator = (prompt('Enter operator(+,-,*,/)'));

num1 = parseFloat(num1);
num2 = parseFloat(num2);

let result;
if (isNaN(num1) || isNaN(num2)) {
    alert('Incorrect Input.Refresh and try again')

} else {

    if (operator == '+') {
        result = num1 + num2;

    } else if (operator == '-') {
        result = num1 - num2;


    } else if (operator == '*') {
        result = num1 * num2;

    } else if (operator == "/") {
        result = num1 / num2;
    }
    alert(num1 + operator + num2 + '= ' + result)


}





