// из строки в число
function stringToDecimal(value, base) {
    return parseInt(value, base);
}
// преобразованик результата в строку
function decimalToString(value, base) {
    return value.toString(base);
}
// сложение
var sum = function (operand1, operand2, base) {
    var decimalOperand1 = stringToDecimal(operand1, base);
    var decimalOperand2 = stringToDecimal(operand2, base);
    var result = decimalOperand1 + decimalOperand2;
    console.log("\u0421\u043B\u043E\u0436\u0435\u043D\u0438\u0435: ".concat(operand1, " (").concat(base, ") + ").concat(operand2, " (").concat(base, ") = ").concat(decimalToString(result, base), " (").concat(base, ")"));
    return result;
};
// вычитание
var difference = function (operand1, operand2, base) {
    var decimalOperand1 = stringToDecimal(operand1, base);
    var decimalOperand2 = stringToDecimal(operand2, base);
    var result = decimalOperand1 - decimalOperand2;
    console.log("\u0412\u044B\u0447\u0438\u0442\u0430\u043D\u0438\u0435: ".concat(operand1, " (").concat(base, ") - ").concat(operand2, " (").concat(base, ") = ").concat(decimalToString(result, base), " (").concat(base, ")"));
    return result;
};
var multiply = function (num1, num2, base) {
    var decNum1 = stringToDecimal(num1, base);
    var decNum2 = stringToDecimal(num2, base);
    var result = decNum1 * decNum2;
    console.log("\u0423\u043C\u043D\u043E\u0436\u0435\u043D\u0438\u0435: ".concat(num1, " (").concat(base, ") * ").concat(num2, " (").concat(base, ") = ").concat(decimalToString(result, base), " (").concat(base, ")"));
    return result;
};
var divide = function (num1, num2, base) {
    var decNum1 = stringToDecimal(num1, base);
    var decNum2 = stringToDecimal(num2, base);
    if (decNum2 === 0) {
        console.log('Error: Попытка деления на ноль');
        return NaN;
    }
    var result = decNum1 / decNum2;
    console.log("\u0414\u0435\u043B\u0435\u043D\u0438\u0435: ".concat(num1, " (").concat(base, ") / ").concat(num2, " (").concat(base, ") = ").concat(decimalToString(result, base), " (").concat(base, ")"));
    return result;
};
// Примеры использования арифметических функций
// Двоичная система
sum("1101", "1011", 2); // 13 + 11 в десятичной
difference("1101", "1011", 2); // 13 - 11 в десятичной
// Восьмеричная система
sum("17", "12", 8); // 15 + 10 в десятичной
difference("17", "12", 8); // 15 - 10 в десятичной
// Десятичная система
sum("15", "10", 10); // 15 + 10
difference("15", "10", 10); // 15 - 10
// Шестнадцатеричная система
sum("A", "5", 16); // 10 + 5 в десятичной
difference("A", "5", 16); // 10 - 5 в десятичной
