"use strict";

/* "Завернул" задания 1-2 в комментарий, потому что переменная "а" объявляется потом заново в задании 3.

Задание 1

var a = 1, b = 1, c, d;

c = ++a; alert(c);           // 2 Сначала добавляется единица
// в значение переменной "а" (это префиксный инкремент), а потом уже это значение (цифра 2) присваивается переменной "с". Получается цифра 2.

d = b++; alert(d);           // 1 Сначала переменной "d" присваивается значение
// переменной "b" (цифра 1), это значение будет
// выведено на экран, а потом уже оно станет на 1 больше в самой переменной "b" (это постфиксный 
//инкремент)

c = (2+ ++a); alert(c);      // 5 В скобках происходит операция сложения. К цифре "2" прибавляется значение
// переменной "а" с префиксным инкрементом. После предыдущей операции кода (с = ++а) в переменную "а" было
// записано значение 2 (поскольку "а" увеличилась на единицу). Теперь в переменную "а" добавляется еще единица,
// получается значение 3, и потом уже это новое значение складывается с цифрой 2. Результат - цифра 5.

d = (2+ b++); alert(d);      // 4 После предыдущей строки кода (где было d = b++) значение переменной "b"
// увеличилось на 1 и стало равно 2. В данной строке кода происходит сложение цифры 2 с переменной "b" с
// постфинксным инкрементом. То есть сначала будет произведено сложение цифры 2 с существующим на данный момент
// значением переменной "b" (2), это результат (4) будет присвоен переменной "d", а уже потом значение
// переменной "b" увеличится на единицу и станет равно цифре 3.

alert(a);                    // 3 Объяснение было дано выше.
alert(b);                    // 3 Объяснение было дано выше.

var a = 2;
var x = 1 + (a *= 2); // Сначала происходит операция в скобках (потому что скобки дают выше приоритет).
// выражение в скобках умножает значение переменной "a" на 2. Результат - цифра 4. Затем эта цифра
// складывается с цифрой 1. Получается результат - цифра 5, который и присваивается теперь переменной "x".

alert("Variable X equals: " + x);


/* 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
//     если a и b положительные, вывести их разность;
//     если а и b отрицательные, вывести их произведение;
//     если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом. ### 

*/

let a = prompt("Please enter the first number. It will be A");
let b = prompt("Please enter the second number. It will be B");
let c = 0;
if(a >= 0 && b >= 0) {
    c = a - b;
    alert("Difference A and B equals: " + c);
} else if (a < 0 && b < 0) {
    c = a * b;
    alert("Multiplication of A and B equals: " + c);
} else if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
    c = a + b;
    alert("Sum of A and B equals: " + c);
}


/*
4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их и возвращать результат.
Обязательно использовать оператор return.

*/
function addNumbers (x, y){
    const finalResult = x + y;
    alert("The result of addition is: " + finalResult);
    return finalResult;
}

function subtractNumbers (x, y){
    const finalResult = x - y;
    alert("The result of subtraction is: " + finalResult);
    return x - y;
}

function multiplyNumbers (x, y){
    const finalResult = x * y;
    alert("The result of multiplication is: " + finalResult);
    return x * y;
}

function divideNumbers (x, y){
    const finalResult = x / y;
    alert("The result of division is: " + finalResult);
    return x / y;
}

/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение.

*/

function mathOperation (arg1, arg2, operation){
    switch(operation){
        case "addition":
            return addNumbers(arg1, arg2);

        case "subtraction":
            return subtractNumbers(arg1, arg2);

        case "multiplication":
            return multiplyNumbers(arg1, arg2);

        case "division":
            return divideNumbers(arg1, arg2);
        default:
            alert("Please, enter the correct information!")
    }
       
}

let number1 = parseInt(prompt("Please enter the first number")); // Запрашиваем у пользователя первое число
let number2 = parseInt(prompt("Please enter the second number")); // Запрашивае у пользователя второе число
let typeOfOperation = String(prompt("Please enter the type of operation")); // Запрашиваем тип математической операции

// вызываем функцию, используя в качестве параметров введенные пользователем данные
mathOperation(number1, number2, typeOfOperation);
