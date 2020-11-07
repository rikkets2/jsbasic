//1)
//var a = 1, b = 1, c, d;
//c = ++a; alert(c);           // 2
//d = b++; alert(d);           // 1
//c = (2+ ++a); alert(c);      // 5
//d = (2+ b++); alert(d);      // 4
//alert(a);                    // 3
//alert(b);                    // 3
alert("Задание 1:Результаты связаны с применением префиксного и постфиксного инкремента, т.е. при префиксе увеличивают рез-тат сразу, а при постфиксе присваивают значение")
// 2)
var a = 2;
var x = 1 + (a *= 2);
alert("Задание 2: Ответ равен " + x);
//3
var a, b,res;
a = Math.round (prompt("Задание№3: Введите целое число a"));
b = Math.round(prompt("Введите целое число b"));
if ((a >= 0) && (b >= 0)) {
    res = a - b;
}
else {
    if ((a < 0) && (b < 0)) {
        res = a * b;
    }
    else { res = a + b; }

    };

alert(res);
//4
var a = +prompt("Задание №4:Введите целое число от 5 до 15");
if (a >= 5) {
 
    var result = "Числовой ряд следующий ";
    line(a);
    function line(a) {
        result = result + a;
        a = a + 1;
        if (a <= 15) { line(a); }
        else { alert("Рекурсия" + result); return; }
    }
}
var a = +prompt("Задание №4:Введите целое число от 5 до 15");
var res= ("Switch. Строка вывода равна: ");
switch (a) {
    default: alert("Вы ввели число не из вышеуказанного диапазона")
    break;
    
    case 5: res = res + "5 ";
    case 6: res = res + "6 ";
    case 7: res = res + "7 ";
    case 8: res = res + "8 ";
    case 9: res = res + "9 ";
    case 10: res = res + "10 ";
    case 11: res = res + "11 ";
    case 12: res = res + "12 ";
    case 13: res = res + "13 ";
    case 14: res = res + "14 ";
    case 15: res = res + "15 "; alert(res);
}
      


//5
var a, b;
function sum(arg1, arg2) {
    return (arg1 + arg2);
}
function differ(arg1, arg2) {
    return (arg1 - arg2);
}
function multi(arg1, arg2) {
    return (arg1 * arg2);
}
function divis(arg1, arg2) {
    return (arg1 / arg2);
}

//6
var arg1, arg2, operation;
var arg1 = +prompt("Задание 6:Введите значение 1 го аргумента");
var arg2 = +prompt("Введите значение 2 го аргумента");
var operation = prompt("Укажите какое действие необходимо осуществить с переменными: сложение, вычитание, умножение,деление");
mathOperation(arg1, arg2, operation);
function mathOperation(arg1, arg2, operation) {
    var result;
    switch (operation) {
        default: alert("Неверно указана арифметическая операция"); break;
        case "сложение": alert("Ответ равен " +sum(arg1, arg2)); break;
        case "вычитание": alert("Ответ равен " +differ(arg1, arg2)); break;
        case "деление": alert("Ответ равен " + divis(arg1, arg2)); break;
        case "умножение": alert("Ответ равен " +multi(arg1, arg2)); break;
      }
}

//7

alert("Задание 7: В соответствии со спецификацией, операторы сравнения > и <, для того, чтобы выяснить, истинно или ложно выражение, пропускают его через так называемый абстрактный алгоритм сравнения для отношений.Оператор == использует так называемый абстрактный алгоритм сравнения для равенств, возвращая в результате true или false.В итоге мы получаем следующие неравенства : null > 0; // false ,null == 0; // false, null >= 0; // true");
//8

val= +prompt("Задание 8: Введите число");
pow = +prompt("Введите степень");
value = 1;
power(val, pow);
function power(val, pow) {
    value=val*value
    pow = pow - 1;
     if (pow >=1) {
        power(val, pow);
    }
        else {alert("Ответ равен  "+value);return; }
}

