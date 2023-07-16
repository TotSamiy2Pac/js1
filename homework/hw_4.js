// ================1======================
//строка проверить строку на наличие . и после нее на com или ru

// function chekEmail(site){
//     let chek = ''
//     result = 0
//     site.split('').map((el) => el === '.' ? result += 1 : result += 0)
//     if (result > 0){
//         chek = site.slice(site.lastIndexOf('.')+1)
//         switch (chek){
//             case 'com' : return '.com'
//             case 'ru' : return '.ru'
//             default : return 'no .com or .ru'
//         }
//     }
//     else {
//         return 'В строке нет точки'
//     }
// }
//
// console.log(chekEmail('google.com'))

// ================2======================
// строка проверить длину слова и узнать что длина четная и не больше 8 и не меньше 4

// function chekLength(str){
//     if (str.length >= 4){
//         if (str.length <= 8){
//             if (str.length % 2 === 0){
//                 return 'Длина больше 4 и меньше 8 и Четная'
//             }
//             else{
//                 return 'Длина больше 4 и меньше 8 и Не Четная'
//             }
//         }
//         else{
//             return 'Длина больше 8 символов'
//         }
//     }
//     else{
//         return 'Длина меньше 4 символов'
//     }
// }
//
// console.log(chekLength('asdasdf'))

// ================3======================
//строка поменять букву каждого четного индекса на E можно решить через map

// function newStr(str) {
//     return str.split('').map((el, index) => index % 2 === 0 ? el = 'E' : el = el).join('')
// }
//
// console.log(newStr('Hello World'))

// ================4======================
// строка1 cтрока2 проверить что пароли совпадают и не должны включать в себя пробелы только в начале

// function chekPassword(str1, str2){
//     if(str1.trimStart() === str2.trimStart()){
//         return 'Пароли совпадают'
//     }
//     else{
//         return 'Пароли не совпадают'
//     }
// }
//
// console.log(chekPassword('  sadasadda ', 'sadasadda '))

// ================5======================
// FizzBuzz

// function fizzBuzz(){
//     let array = new Array(100).fill(1)
//     array = array.map((el, index) => el+index)
//     console.log(array)
//     array =  array.map((el, index) =>
//         (el % 3 === 0 && el % 5 !== 0) ?
//         el = `${el}Fizz` :
//             (el % 5 === 0 && el % 3 !== 0) ?
//                 el = `${el}Buzz` :
//                 (el % 3 === 0 && el % 5 === 0) ?
//                     el = `${el}FizzBuzz` : el = el)
//     return array
// }
//
// console.log(fizzBuzz())

// {
//         if (el % 3 === 0 && el % 5 !== 0) {
//             el = `${el}Fizz`
//         }
//         else if (el % 5 === 0 && el % 3 !== 0) {
//             el = `${el}Buzz`
//         }
//         else {
//             el = el
//         }
//     }

// ================6======================
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem-ipsum-dolor-sit-amet'
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem/ipsum/dolor/sit/amet'
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem ipsum dolor sit amet'

// function string(str){
//     return str.join('-') +
//         '\n' + str.join('/') +
//         '\n' + str.join(' ')
// }
//
// console.log(string(['lorem', 'ipsum', 'dolor', 'sit', 'amet']))

// ================7======================
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['ipsum', 'sit']
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['lorem', 'dolor', 'amet']

// function arr(array){
//     let arr1 =[]
//     let arr2 = []
//     arr1 = array.filter((el, index) => index % 2 !== 0)
//     arr2 = array.filter((el, index) => index % 2 === 0)
//     return [arr1, arr2]
// }
//
// console.log(arr(['lorem', 'ipsum', 'dolor', 'sit', 'amet']))

// ================8======================
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit']

// function arr(array){
//     array.push('consectetur', 'adipiscing', 'elit')
//     return array
// }
//
// console.log(arr(['lorem', 'ipsum', 'dolor', 'sit', 'amet']))

// ================9======================
// [123,33,444,'22',55,66,77,88,99] => [123,33,444,55,66,77,88,99]
// [123,33,444,'22',55,66,77,88,99] => [123,33,444,55,66,77,88,99,22]

// function arr(array){
//     return array.filter((el) => typeof el !== 'string')
// }

// function arr(array){
//     let chek = 0
//     array.map((el,index) => typeof el === 'string' ? chek = el : el)
//     array = array.filter((el, index) => typeof el !== 'string')
//     array.push(parseInt(chek))
//     return array
// }
// //
// console.log(arr([123,33,444,'22',55,66,77,88,99]))

// ================10======================
// ['null', undefined, 0, false, true, ''] => [0, false, true]
// ['null', undefined, 0, false, true, ''] => [0, false, true, 'null', undefined, '']

// function writeBoolean(arr){
//     return arr.filter(el => typeof el === 'number' || typeof el === 'boolean')
// }
//
// console.log(writeBoolean(['null', undefined, 0, false, true, '']))

// ================================================

// function writeBoolean(arr){
//     arr1 = []
//     arr.filter(el => (typeof el === 'number' || typeof el === 'boolean') ? arr1.push(el) : el)
//     arr.map(el => (typeof el !== 'number' && typeof el !== 'boolean') ? arr1.push(el) : el)
//     return arr1
// }
//
// console.log(writeBoolean(['null', undefined, 0, false, true, '']))

// ================11======================
// [1123, 'qwe'] => [1123, 'qwe', 1123, 'qwe']
// [null, undefined] => [null, undefined, null, undefined]

// function x2(arr){
//     arr1 = arr
//     arr.map((el, index) => arr1.push(el))
//     return arr1
//
// }
//
// console.log(x2([1123, 'qwe']))
