// =====================================================================================================================
// Sum without highest and lowest number

// function sumArray(array) {
//     let sumMaxMin = -(Math.max.apply(null, array) + Math.min.apply(null, array))
//     if (array !== null && array !== [] && array){
//         // console.log('yes')
//         if (array.length > 1) {
//             return array.reduce((acc, el) => {
//                 return acc += el
//             }, sumMaxMin)
//         }
//         else {
//             return 0
//         }
//     }
//     else {
//         return 0
//     }
// }
//
// console.log(sumArray([ 0 ]))

// =====================================================================================================================
// Categorize New Member
// assert.deepEqual(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior'])
// function openOrSenior(data){
//     let res = []
//     for (let i = 0; i < data.length; i++){
//         if (data[i][0] >= 55 && data[i][1] >= 7){
//             res.push("Senior")
//         }
//         else {
//             res.push("Open")
//         }
//     }
//     return res
// }
//
// console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))

// function tacofy(word) {
//     let aiueo = ['a','i','u','e','o']
//     let t = 'tomato'
//     let l = 'lettuce'
//     let c = 'cheese'
//     let g = 'guacamole'
//     let s = 'salsa'
//     let arr = ['shell']
//     if (!word){
//         return ['shell', 'shell']
//     }
//     else {
//         word.toLowerCase().split('').map(el => {
//             switch (el){
//                 case 't' : return arr.push(t)
//                 case 'l' : return arr.push(l)
//                 case 'c' : return arr.push(c)
//                 case 'g' : return arr.push(g)
//                 case 's' : return arr.push(s)
//             }
//             if (aiueo.includes(el) === true){
//                 return arr.push('beef')
//             }
//         })
//         arr.push('shell')
//         return arr
//     }
// }
//
// console.log(tacofy("zbEDMRErdaAwizOwD"))


// ===================================================================================================================
// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// assert.equal(domainName("http://google.co.jp"), "google");
// assert.equal(domainName("https://youtube.com"), "youtube");
// Testing for https://wgctlqhft59t6xhaadyd0.org/img/
// function domainName(url){
//     if (url.substr(0,5) === 'http:'){
//         url = url.substr(7)
//         if (url.substr(0, 4) === 'www.' ){
//             url = url.slice(url.indexOf('.')+1, url.indexOf('.', url.indexOf('.')+1))
//         }
//         else {
//             url = url.slice(0, url.indexOf('.'))
//         }
//     }
//     else if (url.substr(0,6) === 'https:'){
//         url = url.substr(8)
//         if (url.substr(0, 4) === 'www.'){
//             url = url.slice(url.indexOf('.')+1, url.indexOf('.', url.indexOf('.')+1))
//         }
//         else {
//             url = url.slice(0, url.indexOf('.'))
//         }
//     }
//     else if (url.substr(0, 4) === 'www.') {
//         url = url.slice(url.indexOf('.') + 1, url.indexOf('.', url.indexOf('.')+1))
//     }
//     else {
//         url = url.slice(0, url.indexOf('.'))
//     }
//     return url
// }
//
// console.log(domainName("muwtf2asq0f-rh3wof4a8vs.jp"))

// ======================================================================================================================
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false



// const hashtagGenerator = (str) => {
//     // let a = str.replaceAll(' ', '')
//     // if(str === "") return false
//     // str.replaceAll(' ', '')
//     // console.log(str.length)
//     if ((str)){
//         str =  str.split(' ').filter(el => el !== '').map(el => el[0].toUpperCase() + el.slice(1)).join('')
//         if (str.length >= 140 || str === '') {
//             return false
//         }
//         else {
//             return ['#', str].join('')
//         }
//     }
//     else {
//         return false
//     }
// }
//
// console.log(hashtagGenerator( "a".repeat(140)))


// ==================================================================================================
// Не РЕШЕНА ЗАДАЧА

// function encryptor (key, message) {
//     let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//     let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//     // key < 0 ? key = key  * (-1) : key
//     message.split(' ').map(el => {
//         el.split('').map((el, idx) => {
//             arr_en.indexOf(el) !== -1 ? el = arr_en[arr_en.indexOf(el) + key] : el = el
//             arr_EN.indexOf(el) !== -1 ? el = arr_EN[arr_EN.indexOf(el) + key] : el = el
//             console.log(el)
//         })
//     })
// }
//
// encryptor(-1, 'Caesar Cipher')

// ===========================================================================================================


// function launchAll() {
//     for(let i = 0; i < 5; i++) {
//         setTimeout(function() {
//             // launchMissile(i);
//             console.log(i, '-ya raketa', i*1000, 's')
//         }, i * 1000);
//     }
// }
//
// // const launchMissile = (i) => {
// //     console.log('raketa', i)
// // }
//
// launchAll()


// ===============================================================================================================


// String.prototype.camelCase=function(){
//     return camelCase.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join('')
// }
//
// camelCase = 'Hello world'

// console.log(String.prototype.camelCase())

// const opS = (options, value1, value2) => {
//     return (value1) + Symbol(options) +  (value2)
// }
//
// console.log(opS('*', 2, 5))


// function addBinary(a,b) {
//     a = a+b
//     let result = []
//     while (a !== 0){
//         result.push(a % 2)
//         a = Math.trunc(a / 2)
//     }
//     return result.reverse().join('')
// }
//
// console.log(addBinary(20,5))



// String.prototype.camelCase=function(){
//     if (this.length > 0 && this !== ' '){
//         return this.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join('')
//     }
//     else {
//         return ''
//     }
// }
//
//
// console.log(''.camelCase())

// ==========================================================================================

// function maxMultiple(divisor, bound){
//     for (let i = bound; i > 0; i--){
//         if (i % divisor === 0){
//             return i
//         }
//     }
// }
//
// console.log(maxMultiple(2, 7))

// ==========================================================================================

// function solution(nums){
//     if(!nums || nums.length === 0) {
//         return null
//     }
//     else {
//         return nums.sort(function(a, b) {
//             return a - b;
//         })
//     }
// }
//
// console.log(solution())


// function oddOrEven(array) {
//     let res = array.reduce((acc, el) => {
//         return acc + el
//     }, 0)
//     return res % 2 === 0? 'even' : 'odd'
// }
//
// console.log(oddOrEven([0, 1, 5]))

// str = 'c'
// console.log(str.charCodeAt())

// function betterThanAverage(classPoints, yourPoints) {
//     return classPoints.reduce((acc, el) => acc + el ,0)+yourPoints / classPoints.length + 1 > yourPoints ? 'False' : 'True'
// }
//
// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88],75))

// function findNeedle(haystack) {
//     for (let i = 0; i < haystack.length; i++){
//         if (haystack[i] === 'needle'){
//             return `found the needle at position ${i}`
//         }
//     }
// }
//
// console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))


// function fizzbuzzPlusPlus(numbers, words) {
//     let arrRes =[]
//     let res = 0
//     for (let i = 1; i <= numbers.reduce((acc,el) => acc*el); i++) {
//         let newWords = []
//         for (let j = 0; j < numbers.length; j++){
//             i % numbers[j] === 0 ? arrRes[i-1] += words[j]  : arrRes
//         }
//         if (typeof arrRes[i-1] === "string") {
//             arrRes[i-1] = arrRes[i-1].replace('undefined', '');
//         }
//         if (arrRes[i-1] === undefined){
//             arrRes[i-1] = i
//         }
//     }
//
//     return arrRes
// }
//
// console.log(fizzbuzzPlusPlus([2,3,5],["fizz", "buzz", "bazz"]))


// function fizzbuzzPlusPlus(numbers, words) {
//     let arrRes =[]
//     let res = 0
//     for (let i = 1; i <= numbers.reduce((acc,el) => acc*el); i++) {
//         let newWords = []
//         for (let j = 0; j < numbers.length; j++){
//             i % numbers[j] === 0 ? newWords.push(words[j])  : arrRes
//         }
//         newWords.length === 0 ? arrRes.push(i) : arrRes.push(newWords.join(''))
//     }
//     return arrRes
// }
//
// console.log(fizzbuzzPlusPlus([2,3,5],["fizz", "buzz", "bazz"]))


// var whatTimeIsIt = function(angle) {
//     let hh = Math.floor(angle/30)
//     let mm = Math.floor((angle % 30) / 0.5)
//     hh.toString().length < 2 ? hh = '0' + hh : hh
//     mm.toString().length < 2 ? mm = '0' + mm : mm
//     if (angle < 30) {
//         hh = 12
//     }
//     return `${hh}:${mm}`
// }
//
// console.log(whatTimeIsIt(45))



/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
function triangleType(a, b, c){
    let arr = [a, b, c].sort(((a,b) => b - a))
    a = arr[0];
    b = arr[1];
    c = arr[2];
    let res = 0
    if (a < b + c){
        a * a === (b * b) + (c * c) ? res = 2 : res
        a * a > (b * b) + (c * c) ? res = 3 : res
        a * a < (b * b) + (c * c) ? res = 1 : res
        return res
    }
    else {
        return 0
    }
}

console.log(triangleType(8, 5, 7))