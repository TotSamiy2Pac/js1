// function chekString(str){
//     str = str.trim();
//     str = str.slice(str.indexOf(' ')+1, str.length) + ' ' +  str.slice(0, str.indexOf(' '));
//     let indexStr = str.lastIndexOf('o')
//     str = str.slice(0, indexStr) + 'a' + str.slice(indexStr+1, str.length)
//     str = str.toLowerCase()
//     str = str[0].toUpperCase() + str.slice(1)
//     return str
// }
//
// console.log(chekString("Horld helolh"))
//
// function chekLenght(str){
//     if (str.length % 2 === 0){
//         return 'Длина четная'
//     }
//     else{
//         return 'Длина не четная'
//     }
// }
//
// console.log(chekLenght(' Hello World'))

// ==========================================================

// let array = [23, 234, 11, 3, 542, 134, 1, 55]
//
// console.log(array.map((el, index) => el % 2 === 0 ? el + ' - Четное' : el + ' - Не четное'))
//
// let str = 'lorem ipsum dolor sit amet'
// let array = str.split(' ')
// console.log(array.map(el => el[0].toUpperCase() + el.slice(1)).join('')) // .join('') ПИШЕТСЯ ПОСЛЕ ЗАКРЫТИЯ СКОБОК MAP!!!!!

//==========================1====================================

// let array = [1, 2, 3, 4, 5] // => [2, 4, 6, 8, 10]

// console.log(array.map((el) => el * 2))

// =========================2===================================

// array = [1, 2, 3, 4, 5] // => [1, 4, 9, 16, 25]

// console.log(array.map((el) => Math.pow(el, 2)))

// ==========================3==================================

// array = ['lorem', 'ipsum', 'dolor', 'sit'] // => [5, 5, 5, 3]
//
// console.log(array.map((el) => el.length))

// ==========================4====================================

// array = ['lorem', 'ipsum', 'dolor'] // => [1, 2, 3]
//
// console.log(array.map((el, index) => index+1))
//
// ==========================5===================================

// array = ['lorem', 'ipsum', 'dolor'] // => ['Lorem', 'ipsum', 'Dolor']
// //
// console.log(array.map((el, index) => index % 2 === 0 ? el[0].toUpperCase() + el.slice(1) : el))
//
// ============================6=======================================

// array = ['lorem', 'ipsum', 'dolor'] // => ['LOREM', 'IPSUM', 'DOLOR']
//
// console.log(array.map((el) => el.toUpperCase()))
//
// ===============================================================

// function strCount(str, letter){
//     let result = 0
//     str.split('').map((el) => el === letter ? result += 1 : result += 0)
//     return result
// }
//
// console.log(strCount('Hoeollo', 'o'))

// =================================================
// return masked string
function maskify(cc) {
    if (cc.length >4) {
        return cc.split('').map((el, index) => index < cc.split('').length - 4 ? el[index] = '#' : el = el).join('')
    }
    else{
        return 'cc'
    }
}

console.log(maskify('2386582736423874627368'))