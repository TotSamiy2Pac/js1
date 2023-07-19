
// function greetingFunction() {
//     let user = 'admin';
//     if (user === 'admin'){
//         return 'Hello admin'
//     }
//     else{
//         return 'Bye Bye'
//     }
// }
//console.log(greetingFunction();

// function chekOut(name, age, city) {
//     if (name === 'Asilbek' && 18>=age<=50 && city === 'batken') {
//         return  'Добро пожаловать Асилбек'
//     }
//     else if ((18>=age<=50 && city === 'batken') && name != 'Asilbek'){
//         return 'Я Вас не знаю'
//     }
//     else if (name === 'Asilbek' && city === 'batken' && 18<=age>=50){
//         return 'Возраст : Ваш возраст должен быть старше 18 и моложе 50'
//     }
//     else if (city != 'batken' || (name === 'Asilbek' && 18>=age<=50)){
//         return  'Это не Ваш город'
//     }
// }

function chekOut(name, age, city) {
    if (name === 'Asilbek') {
        if (age >= 18 && age <= 50) {
            if (city === 'kadamjay'){
                return  'Добро пожаловать Асилбек'
            }
            else {
                return  'Это не Ваш город'
            }
        }
        else if (city != 'kadamjay') {
            return 'Ваш возраст и город не подходит '
        }
        else {
            return 'Возраст : Ваш возраст должен быть старше 18 и моложе 50'
        }
    }
    else{
        return 'Я Вас не знаю'
    }
}


console.log(chekOut('Asilbek',51,'kadamjay'))
