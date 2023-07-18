// =================1==================================
// Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.
// [1, 2, 3, 0, 4, 5, 6]

// const sqrt = (arr) => {
//     return arr.map(el => el * el)
// }
//
// console.log(sqrt([1, 2, 3, 0, 4, 5, 6]))

// =================2==================================
// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.

// const chekArray = (arr) => {
//     return arr.filter(el => el > 0)
// }
//
// console.log(chekArray([1, 2, 3, 0, 4, 5, 6]))

// =================3==================================
//Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.

// const chekArray = (arr) => {
//     return arr.filter(el => el >= 0)
// }
//
// console.log(chekArray([1, 2, -3, 0, 4, -5, 6]))

// =================4==================================
// Дан массив с числами. Оставьте в нем только отрицательные числа.

// const chekArray = (arr) => {
//     return arr.filter(el => el < 0)
// }
//
// console.log(chekArray([1, 2, -3, 0, 4, 5, -6]))

// =================5==================================
// Дан массив с числами. Оставьте в нем только четные числа.

// const chekArray = (arr) => {
//     return arr.filter(el => el % 2 === 0)
// }
//
// console.log(chekArray([1, -2, 3, 0, 4, -5, 6]))

// =================6==================================
// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.

// const chekArray = (arr) => {
//     return arr.filter(el => el.length > 5)
// }
//
// console.log(chekArray(['hello', 'sit', 'ipsum', 'javascript', 'python', 'sun', 'even']))

// =================7==================================
// Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.

// const chekArray = (arr) => {
//     let result = 0
//     arr.map(el => el < 0 ? result += 1 : null)
//     return result
// }
//
// console.log(chekArray([1, 2, -3, 0, -4, 5, -6]))

// =================8==================================
// [1,2,3,4], ['a','b','c','d'] => [1, 2, 3, 4, 'a', 'b', 'c', 'd']

// const arrPush = (arr1, arr2) => {
//     return [...arr1, ...arr2]
// }
//
// console.log(arrPush([1,2,3,4], ['a','b','c','d']))

// =================9==================================
// [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'hello world']

// const arrPush = (arr, str) => {
//     return [...arr, str]
// }
//
// console.log(arrPush([2, 3, 4, 5], 'hello world'))

// =================10==================================
// [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

// const arrPush = (arr, str) => {
//     return [...arr, ...str.split('').filter(el => el !== ' ')]
// }
//
// console.log(arrPush([2, 3, 4, 5], 'hello world'))

// =================11==================================
// [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd', 2, 3, 4, 5]

// const arrPush = (arr, str) => {
//     return [...arr, ...str.split('').filter(el => el !== ' '), ...arr]
// }
//
// console.log(arrPush([2, 3, 4, 5], 'hello world'))



// const arr = n => {
//     let array = new Array(n).fill(1)
//     return array.map((el, index) => el + index).reverse()
// }
//
// console.log(arr(99))

// const polindrom = str => {
//     let pol = ''
//     if (typeof str === 'string'){
//         pol = str.split('').reverse().join('')
//     }else {
//         str = str.toString()
//         pol = str.split('').reverse().join('')
//     }
//     return str === pol ? true : false
//
// }
//
// console.log(polindrom(12321))


