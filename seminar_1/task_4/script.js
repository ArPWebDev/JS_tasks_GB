/*
 Напишите программу, которая принимает на вход три числа и выдаёт максимальное из этих чисел.

2, 3, 7 -> 7
44 5 78 -> 78
22 3 9 -> 22
*/

let val = parseInt(prompt("Введите первое число")); 
let val2 = parseInt(prompt("Введите второе число")); 
let val3 = parseInt(prompt("Введите третье число")); 

/* let num = Math.max(val, val2, val3); */

num = val > val2 ? (val> val3 ? val : val3)  : (val2 > val3 ? val2 : val3);
alert("Ответ:" + num);
