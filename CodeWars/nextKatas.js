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

var mergeAlternately = function(word1, word2) {

};
