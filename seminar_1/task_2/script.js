/* Напишите программу, которая на вход принимает два числа и выдаёт, какое число большее, а какое меньшее.

a = 5; b = 7 -> max = 7
a = 2 b = 10 -> max = 10
a = -9 b = -3 -> max = -3 */

let val = parseInt(prompt("Введите первое число")); 
let val2 = parseInt(prompt("Введите второе число")); 

//let num = Math.max(val, val2);

let num = val > val2 ? val : val2;
alert("Ответ:" + num);