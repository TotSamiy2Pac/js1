//==============HOMEWORK==================
//================1=======================

// function userChek(user){
//     if (user === 'admin'){
//         return 'Welcome'
//     }
//     else{
//         return 'not correct user'
//     }
// }
//
// console.log(userChek('admin'))

//================2=======================

// function chekDay(day){
//     if (day>0 && day <=28){
//         return 'Today is ' + day + ' of february'
//     }
//     else {
//         return 'on february only 28 day, your day is \'day\' of another month'
//     }
// }
//
// console.log(chekDay(30))

//================3=======================

// function chekNumber(number) {
//     if (number === 50) {
//         return '\'num\' is equals of 50'
//     }
//     else{
//         return '\'num\' is not correct'
//     }
// }
//
// console.log(chekNumber(50))

//================4=======================

// function chek(user,age){
//     if (user === 'Tot') {
//         if (age >= 18){
//             return 'Welcome ' + user
//         }
//         else {
//             return '\'age\' rejected'
//         }
//     }
//     else{
//         return '\'user\'  rejected'
//     }
// }
//
// console.log(chek('Tot',17))

//================4=======================

// function chekUserNameLangth(user){
//     if (user.length >2){
//         if (user.length <=5){
//             return 'Welcome ' + user
//         }
//         else {
//             return 'Ваше имя слишком длинное'
//         }
//     }
//     else{
//         return 'Ваше имя слишком короткое'
//     }
// }
//
// console.log(chekUserNameLangth('Яна'))

//================5=======================

// function chekTypeOf(age){
//     if (typeof(age)   === 'number'){
//         return 'Ваш возраст ' + age
//     }
//     else {
//         return 'ВВозраст должен быть числом'
//     }
// }
//
// console.log(chekTypeOf('12'))

//================5=======================

// function chekAge(age) {
//     if (typeof(age)   === 'number'){
//         if (age > 23){
//             return 'Welcome'
//         }
//         else {
//             return 'Ваш возраст должен быть старше 23'
//         }
//     }
//     else {
//         return 'Возраст должен быть числом'
//     }
// }
//
// console.log(chekAge(22))

//================6=======================

// function chekDay(day){
//     if (typeof(day) === 'number'){
//         if (day === 1){
//             return 'Сегодня Понедельник'
//         }
//         else if (day === 2) {
//             return 'Сегодня вторник'
//         }
//         else if (day === 3) {
//             return 'Сегодня среда'
//         }
//         else if (day === 4) {
//             return 'Сегодня четверг'
//         }
//         else if (day === 5) {
//             return 'Сегодня пятница'
//         }
//         else if (day === 6 || day === 7) {
//             return 'Сегодня выходной'
//         }
//         else {
//             return 'Ошибка: нужно ввести число от 1 до 7'
//         }
//     }
//     else {
//         return 'Вы должны ввести число'
//     }
// }
//
// console.log(chekDay(7))