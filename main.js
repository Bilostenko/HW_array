
1. Сделать собственные примеры методов применяемых для массивов.

let arr = [1, 2, 3, 4, 5]
let arr2 = [1, 2, 3, 4, 5]
/* 1 method */
function stringTo(a, b) {
  a.toString()
  b.toString()
  return Array.from(a.concat(b))
}
stringTo(arr, arr2) /* [1, 2, 3, 4, 5, 1, 2, 3, 4, 5] */

/* 2 method */
let filterrr = arr.filter(function (el) {
  return el > 2
}) /* [3, 4, 5] */

/* 3 method */
let indEx = arr.indexOf(2)

/* 4 method */
arr.pop() /*  [1, 2, 3, 4] */

/* 5 method */
arr.push() /* [1, 2, 3, 4, 5, 11] */

/* 6 method */
arr.shift() /*  [2, 3, 4, 5] */

/* 7 method */
arr.unshift(11) /* [11, 1, 2, 3, 4, 5] */

/* 8 method */
let sliceee = arr.slice(1, 3) /* [2, 3] */

/* 9 method */
arr.splice(1, 3, "hello")  /* [1, 'hello', 5] */

/* 10 method */
let joinnn = arr.join('/') /* 1/2/3/4/5 */


2. Создать функцию для нахождения минимального и максимального элемента массива getMinAndMax(array).
     Результат должен выводиться в консоль.

let arr = [1, 2, 3, 4, 5]

function getMinAndMax(array) {
  let min = Math.min(...arr)
  let max = Math.max(...arr)

  return console.log(`the min number is ${min} and max number is ${max}`)
}

getMinAndMax(arr)


3. Определить элементы массива и вывести их значения, индексы которых лежит в указанном пределе.Предел вводит пользователь.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let min = prompt(`Enter min number: `)
let max = prompt(`Enter max number: `)

function getRange(arr, min, max) {
  alert(`The given array is ${arr}. You have entered min number ${min} and max number ${max}`)
  let range = arr.slice(min, max - 1)
  return alert(`So the range is ${range}`)
}
getRange(arr, min, max)

4. Отсортировать массив на 10 чисел в порядке возростания.Значения принимаются от пользователя.Сортировка осушествляется методом sort().

function getSortedNumbers() {
  let userNumbers = prompt(`Enter 10 rundom numbers separated with сoma. Example: "1,": `).split(",")
  console.log(userNumbers)
  alert(userNumbers.sort((a, b) => a - b).join(" "));

}
getSortedNumbers()


5. Создать программу, выполняющую вставку элемента в массив после элемента, значение которого укажет пользователь.

function getInput() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  let userInputData = +prompt(`Enter any word: `)
  let userIndexData = +prompt(`Enter index: `)

  arr.splice(userIndexData, 0, userInputData)
  console.log(arr)
}
getInput()

6. Необходимо получить предпоследний элемент из массива month и вывести его на экран.
var month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
console.log(month[month.length - 2])

7. Создать два произвольных массива: один массив - любимая спортивная команда / модели автомобилей / города, во втором - количество игроков в команде / объем двигателя / количество жителей в городе.Объединить данные из двух массивов и вывести их в одну строку.  -- >

function getConcat() {

  let citiesName = ['Kyiv', 'Kharkiv', 'Odesa']
  let citiesPopulation = [123, 456, 789]
  let concat = []

  for (let i = 0; i < citiesName.length; ++i) {
    concat.push(citiesName[i].concat((":")+citiesPopulation[i]))
  }

  return concat
}

getConcat()