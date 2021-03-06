'use strict';
const assert = require('assert');




// Задача 1 Инвертированный регистр
// Реализуйте функцию invertCase, которая меняет в строке регистр каждой буквы на противоположный.
import invertCase from './invertCase';
// Тесты для задачи 1
assert.equal(invertCase('Hello, World!'), 'hELLO, wORLD!'); // hELLO, wORLD!
assert.equal(invertCase('I loVe JS'), 'i LOvE js'); // i LOvE js
assert.equal(invertCase('    What the  hell?  '), '    wHAT THE  HELL?  ');
assert.equal(invertCase(''), '');
assert.equal(invertCase(' '), ' ');






// Задача 2 Без двух нулей
// принимает на вход два аргумента - количество нулей и количество единиц, и определяет сколько есть способов размещения этих нулей и единиц так, 
// что бы не было двух нулей идущих подряд
// Алгоритм: 1) посчитать все варианты размещения нолей. 2) посчитать варианты размещения пар нолей 3) вычесть результат шага 2 из шага 1
import withoutTwoZeros from './withoutTwoZeros';
// Teсты для задачи 3
assert.equal(withoutTwoZeros(2, 2), 3); // 3
assert.equal(withoutTwoZeros(2, 1), 1); // 1
assert.equal(withoutTwoZeros(1, 1), 2); // 2
assert.equal(withoutTwoZeros(1, 3), 4), // 4
assert.equal(withoutTwoZeros(2, 4), 10); // 10
assert.equal(withoutTwoZeros(3, 5), 49); // 49



// Задача 3 Сумма квадратов 
// Сумма квадратов первых десяти натуральных чисел это 1**2 + 2**2 + 3**2 + ... + 10**2 = 385.
// Квадрат суммы первых десяти натуральных чисел это (1 + 2 + 3 + ... + 10)**2 = 55*2 = 3025.
// Разница между квадратом суммы и суммой квадратов первых десяти натуральных чисел: 3025 − 385 = 2640.
// Напишите функцию sumSquareDifference, которая принимает аргумент n и возвращает разницу между
// квадратом суммы и суммой квадратов первых n натуральных чисел.
const sumSquareDifference = n => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
  }
  return ( arr.reduce((sum, current) => sum + current) )**2 - arr.map( n => n**2 ).reduce((a, b) =>  a + b );
}



// Задача 4 Переворот строки
// Реализуйте функцию, которая переворачивает строку задом наперед, используя рекурсию.
const reverse = str => {
  if (str.length == 1) return str; 
  let newString = str[str.length-1]; // при каждом вызове последний символ записываем в переменную newString
  return newString += reverse( str.substring(0, str.length-1) ); // в каждый новый вызов передаем строку без последнего символа
}
// Tecты для 4 задачи
assert.equal(reverse('str'), 'rts'); // rts
assert.equal(reverse('hexlet'), 'telxeh'); // telxeh
assert.equal(reverse('b'), 'b'); // b




// Задача 5 Найти FizzBuzz
/*
Реализуйте и экспортируйте по умолчанию функцию, которая выводит (console.log) в терминал числа в диапазоне от begin до end. При этом:

Если число делится без остатка на 3, то вместо него выводится слово Fizz
Если число делится без остатка на 5, то вместо него выводится слово Buzz
Если число делится без остатка и на 3, и на 5, то вместо числа выводится слово FizzBuzz
В остальных случаях выводится само число

Функция принимает два параметра (begin и end), определяющих начало и конец диапазона (включительно). 
Если диапазон пуст (в случае, когда begin > end), то функция просто ничего не печатает.
*/
import fizzBuzz from './fizzBuzz';
//Тесты для 5 задачи не написал




// Задача 6 Счастливые числа
import isHappyNumber from './isHappyNumber';
// Тесты для задачи 6
assert.equal(isHappyNumber(7), true); // должно вернуть true
assert.equal(isHappyNumber(798765432), 'A lot of iteration'); // должно вернуть 'A lot of iteration'




// Задача 7 Переворот числа
// Реализуйте функцию, которая переворачивает цифры в переданном числе и возвращает новое число.
import reverseInt from './reverseInt';
// Тесты для задачи 7
assert.equal(reverseInt(13), 31); // 31
assert.equal(reverseInt(-123), -321); // -321
assert.equal(reverseInt(0), 0); // 0
assert.equal(reverseInt(-1), -1); // -1
assert.equal(reverseInt(-10), -1); // -1
assert.equal(reverseInt(-9), -9); // -9
assert.equal(reverseInt(9), 9); // 9
assert.equal(reverseInt(930), 39); // 39




// Задача 8 Счастливый билет
import isHappyTicket from './isHappyTicket';
// Тесты для задачи 8
assert.equal(isHappyTicket(385916), true); // true
assert.equal(isHappyTicket(231002), false); // false
assert.equal(isHappyTicket(128722), true); // true
assert.equal(isHappyTicket('054702'), true); // true


// Задача 9 Разница углов
// Напишите функцию diff, которая принимает два угла (integer), каждый от 0 до 360, и возвращает наименьшую разницу между ними.
import diff from './diffCorners';
// тесты к 9-й задаче
assert.equal(diff(2,6), 4);
assert.equal(diff(0, 45), 45) //=== 45;         // не 315, а 45, потому что 45 меньше
assert.equal(diff(0, 180), 180) //=== 180;
assert.equal(diff(0, 190), 170) //=== 170;       // не 190, а 170, потому что 170 меньше
assert.equal(diff(120, 280), 160) //=== 160;

// Задача 10 Фасад
// https://ru.hexlet.io/challenges/programming_basics_reexport
import * as math from './math';



// Задача 11 Идеальные числа
// Создайте функцию isPerfect, которая принимает число и возвращает true, если оно совершенное, и false — в ином случае.
// Совершенное число — это положительное целое число, равное сумме его положительных делителей (не считая само число). 
// Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.
import isPerfect from './isPerfect';

assert.equal(isPerfect('6'), true); 
assert.equal(isPerfect('7b'), false); 
assert.equal(isPerfect('6b'), false); 
assert.equal(isPerfect(6), true); 
assert.equal(isPerfect(7), false); 
assert.equal(isPerfect(28), true); 
assert.equal(isPerfect(496), true);
assert.equal(isPerfect(196), false);





// Задача 12 Степень тройки
// Реализуйте и экспортируйте по умолчанию функцию isPowerOfThree, которая определяет, является ли переданное число 
// натуральной степенью тройки. Например, число 27 это третья степень (3^3), а 81 это четвертая (3^4).
import isPowerOfThree from './isPowerOfThree';

// Тесты для задачи 12
assert.equal(isPowerOfThree(1),true); // true (3^0)
assert.equal(isPowerOfThree(2),false); // false
assert.equal(isPowerOfThree(9),true); // true (3^2)
assert.equal(isPowerOfThree(27),true);
assert.equal(isPowerOfThree(30),false);


// Задача 13 Форматированное время
// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход количество минут (прошедших с начала суток) 
// и возвращает строку, являющуюся временем в формате чч:мм.
import formattedTime from './formattedTime';

// Тесты к задаче 13
assert.equal(formattedTime(5), '00:05'); // 00:05
assert.equal(formattedTime(15), "00:15"); // 00:15
assert.equal(formattedTime(60), "01:00"); // 01:00
assert.equal(formattedTime(67), "01:07"); // 01:07
assert.equal(formattedTime(175), "02:55"); // 02:55
assert.equal(formattedTime(600), "10:00"); // 10:00
assert.equal(formattedTime(754), "12:34"); // 12:34


// Задача 14 Функция Аккермана
import ackermann from './ackermann';

// Тесты к задаче 14
assert.equal(ackermann(0, 0), 1); // 1
assert.equal(ackermann(2, 1), 5); // 5
assert.equal(ackermann(2, 3), 9); // 9
assert.equal(ackermann(2, 5), 13); // 13
assert.equal(ackermann(3, 5), 253); // 253
assert.equal(ackermann(-1, 1), undefined); // undefined
assert.equal(ackermann(1, -1), undefined); // undefined





// Задача 15 Преобразование DNA в RNA
import dnaToRna from './dnaToRna';

// Tecты для задачи 15
assert.equal(dnaToRna('ACGTGGTCTTAA'), 'UGCACCAGAAUU'); // 'UGCACCAGAAUU'
assert.equal(dnaToRna('CCGTA'), 'GGCAU'); // 'GGCAU'
assert.equal(dnaToRna(''), ''); // ''
assert.equal(dnaToRna('ACTXUCA'), null); // null





// Числа Черча
import { Zero, Succ } from './numerals';


// Тесты для задачи "Числа Черча"

const two = Succ(Succ(Zero));
assert.equal( two(x => x + 1)(0), 2 ); // 2

const four = Succ(Succ(two));
assert.equal( four(x => x + 1)(0), 4 ); // 4








// Композиция функций
// описание задачи см. в файле compose.js
import compose from './compose';
const f = compose(Math.sqrt, Math.abs);

// Тесты 
assert.equal(compose(v => v, v => v)(10), 10); // => 10
assert.equal(compose(v => v + 2, v => v)(10), 12); // => 12
assert.equal(compose(v => v, v => v - 2)(10), 8); // => 8
assert.equal(compose(v => v ** 2, v => v - 2)(2), 0); // => 0
assert.equal(compose(v => v - 2, v => v ** 2)(2), 2); // => 2







// Практика: Пары без функций. 
// подробности задачи см. в файле pairs.js
import { cons, car, cdr } from './pairs';


// Тесты
const pair = cons(5, 8);	// 2^5 * 3^8 = 209952

assert.equal(cons(5, 8), 209952); // 2^5 * 3^8 = 209952
assert.equal(car(pair), 5); // 5
assert.equal(cdr(pair), 8); // 8


const pair2 = cons(0, 0);

assert.equal(cons(0, 0), 1);
assert.equal(car(pair2), 0);
assert.equal(cdr(pair2), 0);





// Задача "Уникальное объединение" 
// файл union.js 
import union from './union';
import { l } from './customDataStructuries';

const list1 = l(2, 3, 2, 1, 7);
const list2 = l(1, 5, 3, 5, 8, 9);

const result = union(list1, list2);
// (2, 3, 1, 7, 5, 8, 9)
assert.equal(union(list1, list2), '2,3,1,7,5,8,9' );




// Задача "Молния"
// файл zip.js
import zip from './zip';

const list3 = l(1, 5, 3, 8, 9);
const list4 = l(2, 3, 2, 1);

// //  ((1, 2), (5, 3), (3, 2), (8, 1))
const result2 = zip(list3, list4);
// Задачу решил. Возвращает массив в массивов вида 
// [ [ 1, 2 ], [ 5, 3 ], [ 3, 2 ], [ 8, 1 ] ]
// Тесты пока что еще не написал. 


// Задача "Списки на базе строк"
// https://ru.hexlet.io/challenges/js_sequences_list
const list5 = l('foo', 'bar', 'baz');
l.toString(list5); // (foo, bar, baz)
assert.equal(l.toString(list5), '(foo, bar, baz)');


// head(list5) - возвращает первый элемент списка
const first = l.head(list5); // 'foo'
assert.equal(l.head(list5), 'foo');


// tail(list) - возвращает "хвост" списка (все элементы, кроме первого)
const rest = l.tail(list5); // l('bar', 'baz')
assert.equal(l.tail(list5), '(bar, baz)');

// isEmpty(list) - проверяет, является ли список пустым
assert.equal(l.isEmpty(list5), false);
assert.equal(l.isEmpty(l()), true);


// cons(item, list) - добавляет элемент в начало списка и возвращает новый список
const newList = l.cons('bas', list5); // l('bas', 'foo', 'bar', 'baz')
assert.equal(l.cons('bas', list5), '(bas, foo, bar, baz)');


// filter(predicate, list) - фильтрует список, используя предикат
const filteredList = l.filter(item => item[0] === 'b', list5); // l('bar', 'baz')
assert.equal(l.filter(item => item[0] === 'b', list5), '(bar, baz)');


// l.map(callback, list) - преобразует список, используя callback-функцию
assert.equal(l.map(item => item[0], list5), '(f, b, b)');
assert.equal(l.map(item => item.toUpperCase(), list5), '(FOO, BAR, BAZ)');


// reduce(callback, init, list) - производит свертывание списка
const result3 = l.reduce((item, acc) => acc ? `${acc},${item}` : item, '', list5);
assert.equal(l.reduce((item, acc) => acc ? `${acc},${item}` : item, '', list5), 'foo,bar,baz');



// Задача про ферзей
// https://ru.hexlet.io/courses/sequences
import isSafeQueens from './isSafeQueens';

assert.equal(isSafeQueens(1,3), true);
assert.equal(isSafeQueens(2,4,1,3), true);
assert.equal(isSafeQueens(2,4,1,1), false);
assert.equal(isSafeQueens(1,5,2,6,3,7,4), true);
assert.equal(isSafeQueens(1,5,2,6,3,7,8), false);




// Задача: "Выравнивание"
// Реализуйте и экспортируйте по умолчанию функцию flatten, которая делает плоским вложенный список.
// const list = l(1, 2, l(3, 5), l(l(4, 3), 2));
// (1, 2, 3, 5, 4, 3, 2)

import flatten from './flatten';
const list6 = l(1, 2, l(3, 5), l(l(4, 3), 2));
const list7 = l( l(100,5, l(l(l(l(l(l(2,4)))),l(3,5,l(l(5,7,8)))))),4);

assert.equal(flatten(list6).toString(), '1,2,3,5,4,3,2');
assert.equal(flatten(list7).toString(), '100,5,2,4,3,5,5,7,8,4');




// Задача: "Первые n элементов"
// Реализуйте и экспортируйте по умолчанию функцию take, которая возвращает список, 
// состоящий из первых n (значение передается первым параметром) элементов исходного 
// (переданного вторым параметром) списка. Остальные детали работы функции демонстрирует нижеприведённый код:

// take(3, l()); // ()
// take(3, l(1, 2)); // (1, 2)
// take(1, l(7, 2)); // (7)
import takeNs from './takens';
assert.equal(l.toString( takeNs(3, l()) ), '()');
assert.equal(l.toString( takeNs(3, l(1, 2)) ), '(1, 2)');
assert.equal(l.toString( takeNs(1, l(7, 2)) ), '(7)');
assert.equal(l.toString( takeNs(100, l(7, 2, 4, 7, 8)) ), '(7, 2, 4, 7, 8)');
assert.equal(l.toString( takeNs(0, l(7, 2, 4, 7, 8)) ), '()');



// Задача: "Одинаковая четность"
import sameParity from './sameparity';

assert.equal(l.toString( sameParity(l(-1, 0, 1, -3, 10, -2)) ), '(-1, 1, -3)');
assert.equal(l.toString( sameParity(l(-2, 0, 1, -3, 10, -2)) ), '(-2, 0, 10, -2)');
assert.equal(l.toString( sameParity(l(5, 0, 1, -3, 10, -2)) ), '(5, 1, -3)');
assert.equal(l.toString( sameParity(l()) ), '()');
assert.equal(l.toString( sameParity(l(-1)) ), '(-1)');
assert.equal(l.toString( sameParity(l(0, 4, -7, -2, 5, 10)) ), '(0, 4, -2, 10)');


// Задача: "Быстрая сортировка"
import quicksort from './quicksort';

assert.equal( quicksort([5, 7, 10, 3, 1, 11, -4, 9, 6, 2, -6]).toString(), '-6,-4,1,2,3,5,6,7,9,10,11' )
assert.equal( quicksort([-1, 7, 10, 3, 1, 11]).toString(), '-1,1,3,7,10,11' )






// Практические задания из курса: "JS:Коллекции"
// https://ru.hexlet.io/courses/js_collections
// Задание: "Нечетное количество"
import findOdd from './findOdd';
assert.deepEqual(findOdd([2,2,3,1,2,1,4,3]), [2, 4]);
assert.deepEqual(findOdd([]), []);
assert.deepEqual(findOdd([2,2,2]), [2]);
assert.deepEqual(findOdd([2,2]), []);
assert.deepEqual(findOdd([2,2,3,4]), [3,4]);
assert.deepEqual(findOdd([2,3,4,2]), [3,4]);
assert.deepEqual(findOdd([2,3]), [2,3]);
assert.deepEqual(findOdd([2,2,2,2]), []);
assert.deepEqual(findOdd([0]), [0]);
assert.deepEqual(findOdd([4,5,4,5,5,4,5,4]), []);
assert.deepEqual(findOdd([4,5,4,5,5,4,5,4,9]), [9]);
assert.deepEqual(findOdd([2,3,4,5,1]), [1,2,3,4,5]);
assert.deepEqual(findOdd([2,3,4,5,2,1]), [1,3,4,5]);
assert.deepEqual(findOdd([-2,3,4,5,2,1]), [-2,1,2,3,4,5]);
assert.deepEqual(findOdd([-2,-2,-22,4,1,1]), [-22,4]);







// Практические задания из курса: "JS:Коллекции"
// https://ru.hexlet.io/courses/js_collections
// Задание: "Сборщик строки запроса"
import bqs from './buildQueryString';

assert.equal(bqs({ per: 10, page: 1 }), 'page=1&per=10');









// Практические задания из курса: "JS:Коллекции"
// https://ru.hexlet.io/courses/js_collections
// Задание: "Поиск ближайшего соседа"
// findIndexOfNearest([], 2); // null
// findIndexOfNearest([15, 10, 3, 4], 0) // 2
import findIndexOfNearest from './findIndexOfNearest';
assert.equal(findIndexOfNearest([], 2), null);
assert.equal(findIndexOfNearest([15, 10, 3, 4], 0), 2);
assert.equal(findIndexOfNearest([15, 13, 3, 4], 12), 1);
assert.equal(findIndexOfNearest([15, 13, 3, 4], 14), 0);
assert.equal(findIndexOfNearest([15, 13, 4, 3, 1], 2), 3);






// Практические задания из курса: "JS:Коллекции"
// https://ru.hexlet.io/courses/js_collections
// Задание: "NRZI кодирование"
import nrzi from './nrzi';
const signal = "_|¯|____|¯|__|¯¯¯" // "011000110100"
assert.equal(nrzi(signal), '011000110100');
assert.equal(nrzi("¯|____|¯¯"), '0100010');





// Практические задания из курса: "JS:Коллекции"
// https://ru.hexlet.io/courses/js_collections
// Задание: "Увеличение двумерного массива"
import enlargeArrayImage from './enlargeArrayImage';
const imgArr = [
  ['*','*','*','*'],
  ['*',' ',' ','*'],
  ['*',' ',' ','*'],
  ['*','*','*','*']
];

assert.deepEqual(enlargeArrayImage(imgArr), 
[ [ '*', '*', '*', '*', '*', '*', '*', '*' ],
[ '*', '*', '*', '*', '*', '*', '*', '*' ],
[ '*', '*', ' ', ' ', ' ', ' ', '*', '*' ],
[ '*', '*', ' ', ' ', ' ', ' ', '*', '*' ],
[ '*', '*', ' ', ' ', ' ', ' ', '*', '*' ],
[ '*', '*', ' ', ' ', ' ', ' ', '*', '*' ],
[ '*', '*', '*', '*', '*', '*', '*', '*' ],
[ '*', '*', '*', '*', '*', '*', '*', '*' ] ]);





// Функция принимает на вход два массива, а возвращает массив, 
// составленный из элементов первого, которых нет во втором.
import diffArr from './diffArr';
assert.deepEqual(diffArr([2, 1], [2, 3]), [1]);
assert.deepEqual(diffArr([2], [2, 3]), []);
assert.deepEqual(diffArr([2, 1], [4, 3]), [2, 1]);
assert.deepEqual(diffArr([], []), []);
assert.deepEqual(diffArr([1], [2]), [1]);
assert.deepEqual(diffArr([1], []), [1]);
assert.deepEqual(diffArr([1,2], []), [1,2]);
assert.deepEqual(diffArr([], [4]), []);





// Функция принимает на вход массив и элементы, которые должны отсутствовать 
// в возвращаемом массиве.
import without from './without';
assert.deepEqual(without([2,1,2,3], 1,2,5), [3]);
assert.deepEqual(without([2,1,2,3,3], 1,2,5), [3, 3]);
assert.deepEqual(without([], 1,2,5), []);
assert.deepEqual(without([]), []);
assert.deepEqual(without([1,2,3]), [1,2,3]);
assert.deepEqual(without([1,2,3,5], 2,2,3,3,1), [5]);






// Пересечение массивов
import intersection from './intersection';
assert.deepEqual(intersection([2, 1], [2, 3]), [2]);
assert.deepEqual(intersection([3, 1, 3], [3, 3, 2]), [3]);
assert.deepEqual(intersection(
  ['kirill', 'rakhim', 'alex', 'dima', 'dzhamshut'],
  ['ippolit', 'rakhim', 'dima', 'schtirlitz', 'kirill', 'alex', 'alibaba']
), ['kirill', 'rakhim', 'alex', 'dima']);
assert.deepEqual(intersection([],[]), []);
assert.deepEqual(intersection([1],[]), []);
assert.deepEqual(intersection([1],[2]), []);
assert.deepEqual(intersection([],[1]), []);







// Чанкование массива (описание см. в chunk.js)
// chunk(['a', 'b', 'c', 'd'], 2);
// → [['a', 'b'], ['c', 'd']]

// chunk(['a', 'b', 'c', 'd'], 3);
// → [['a', 'b', 'c'], ['d']]

import chunkArr from './chunkArr';
assert.deepEqual(chunkArr(['a', 'b', 'c', 'd'], 2), [['a', 'b'], ['c','d']]);
assert.deepEqual(chunkArr(['a', 'b', 'c', 'd'], 3), [['a', 'b', 'c'], ['d']]);
assert.deepEqual(chunkArr(['a', 'b', 'c', 'd'], 4), [['a', 'b', 'c', 'd']]);
assert.deepEqual(chunkArr(['a', 'b', 'c', 'd'], 0), ['a', 'b', 'c', 'd']);
assert.deepEqual(chunkArr(['a', 'b', 'c', 'd'], 1), [['a'], ['b'], ['c'], ['d']]);
assert.deepEqual(chunkArr(['a'], 4), [['a']]);
assert.deepEqual(chunkArr([], 4), []);
assert.deepEqual(chunkArr([], 0), []);





// fromPairsToObj.js
// Функция принимает на вход массив, состоящий из массивов-пар и возвращает объект, полученный из этих пар.
import fromPairsToObj from './fromPairsToObj';
assert.deepEqual(fromPairsToObj([['fred', 30], ['barney', 40]]), { 'fred': 30, 'barney': 40 });
assert.deepEqual(fromPairsToObj([['fred', 30]]), { 'fred': 30 });
assert.deepEqual(fromPairsToObj([]), {});
assert.deepEqual(fromPairsToObj(), {});