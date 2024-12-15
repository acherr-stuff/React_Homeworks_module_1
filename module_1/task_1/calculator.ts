// из строки в число
function stringToDecimal(value: string, base: number): number {
    return parseInt(value, base);
}

// преобразованик результата в строку
function decimalToString(value: number, base: number): string {
    return value.toString(base);
}

// определяем тип для функций арифметической операции
type Operation = (operand1: string, operand2: string, base: number) => number;

// сложение
const sum: Operation = (operand1, operand2, base) => {
    const decimalOperand1 = stringToDecimal(operand1, base);
    const decimalOperand2 = stringToDecimal(operand2, base);
    const result = decimalOperand1 + decimalOperand2;
    console.log(`Сложение: ${operand1} (${base}) + ${operand2} (${base}) = ${decimalToString(result, base)} (${base})`);
    return result;
};

// вычитание
const difference: Operation = (operand1, operand2, base) => {
    const decimalOperand1 = stringToDecimal(operand1, base);
    const decimalOperand2 = stringToDecimal(operand2, base);
    const result = decimalOperand1 - decimalOperand2;
    console.log(`Вычитание: ${operand1} (${base}) - ${operand2} (${base}) = ${decimalToString(result, base)} (${base})`);
    return result;
};

const multiply: Operation = (num1, num2, base) => {
    const decNum1 = stringToDecimal(num1, base);
    const decNum2 = stringToDecimal(num2, base);
    const result = decNum1 * decNum2;
    console.log(`Умножение: ${num1} (${base}) * ${num2} (${base}) = ${decimalToString(result, base)} (${base})`);
    return result;
};

const divide: Operation = (num1, num2, base) => {
    const decNum1 = stringToDecimal(num1, base);
    const decNum2 = stringToDecimal(num2, base);
    if (decNum2 === 0) {
        console.log('Error: Попытка деления на ноль');
        return NaN;
    }
    const result = decNum1 / decNum2;
    console.log(`Деление: ${num1} (${base}) / ${num2} (${base}) = ${decimalToString(result, base)} (${base})`);
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