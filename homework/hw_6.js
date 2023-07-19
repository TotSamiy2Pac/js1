// ======================1=======================
// Ожидаемый результат: [1, 2, 3] => [3, 2, 1]

// const arrayReverse = (arr) => {
//     return arr.reverse()
// }
//
// console.log(arrayReverse([1, 2, 3]))

// ======================2=======================
// Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений, таких как
// false, undefined, пустые строки, ноль, null. * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

// const clearArray = (arr) => {
//     return arr.filter(el => el)
// }
//
// console.log(clearArray([0, 1, false, 2, undefined, '', 3, null]))

// ======================3=======================
// Напишите функцию, которая убирает повторяющиеся значения.
//     Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]

// const reapeteDelete = (arr) => {
//     return arr.filter((el1, idx) => arr.indexOf(el1) === idx )
// }
//
// console.log(reapeteDelete(["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl", 'Mike', "Adam"]))

// ======================4=======================
// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
//  Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

// const addNum = (arr, num1, num2, num3) => {
//     let a = [...arr, num1, num2, num3]
//     console.log('В конец : ', a)
//     let b = [num1, num2, num3, ...arr]
//     console.log('В начало : ', b)
// }
// addNum([1, 2, 3], 4, 5, 6)

// ======================5=======================
// Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

// const addNum = (arr, arr1) => {
//     return [...arr, ...arr1]
// }
//
// console.log(addNum(['a', 'b', 'c'],[1, 2, 3] ))

// ======================6=======================
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

// const spliceArr = (arr) => {
//     return [...arr.splice(0, arr.indexOf(2)), ...arr.splice(arr.indexOf(3))]
// }

const spliceArr = (arr) => {
    return [...arr.splice(0,2) ]
}
//
// console.log(spliceArr([1, 4, 3, 4, 5]))

// ======================7=======================
// Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

// const keyObj = (obj) => {
//     return Object.keys(obj)
// }
//
// console.log(keyObj({js:'test', jq: 'hello', css: 'world'}))

// ======================8=======================
// Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой.
//     ['Капуста', 'Репа', 'Редиска', 'Морковка']

// const funcToString = (arr) => {
//     return arr.join(', ')
// }
//
// console.log(funcToString(['Капуста', 'Репа', 'Редиска', 'Морковка']))

// ======================9=======================
// Пользователь вводит строку кириллицей разного регистра. Напишите функцию,
//которая принимает строку в качестве аргумента и заменяет регистр каждого символа на противоположный.
//Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должен быть массив [кАжДыЙ оХоТнИк]

// const stringToOpposite = (str) => {
//     return str.split('').map(el => el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()).join('').split()
// }
//
// console.log(stringToOpposite('КаЖдЫй ОхОтНиК'))

// ======================10=======================
// 1 фильтровать по цене. от 40000 до 60000 и год до 2019
// 2 марка

const cars = [
    {
        make: "Ford",
        model: "Mustang",
        year: 1969,
        color: "red",
        price: 25000
    },
    {
        make: "Ford",
        model: "F-150",
        year: 2017,
        color: "blue",
        price: 30000
    },
    {
        make: "Ford",
        model: "F-150",
        year: 2023,
        color: "blue",
        price: 75000
    },
    {
        make: "Tesla",
        model: "Model S",
        year: 2018,
        color: "black",
        price: 120000
    },
    {
        make: "Chevrolet",
        model: "Camaro",
        year: 1970,
        color: "orange",
        price: 60000
    },
    {
        make: "Dodge",
        model: "Challenger",
        year: 2019,
        color: "red",
        price: 35000
    },
    {
        make: "Chevrolet",
        model: "Corvette",
        year: 2019,
        color: "blue",
        price: 90000
    },
    {
        make: "Tesla",
        model: "Model 3",
        year: 2019,
        color: "white",
        price: 40000
    },
    {
        make: "Mercedes",
        model: "C-Class",
        year: 2019,
        color: "black",
        price: 60000
    }
]

// const fillObj = (cars) => {
//     return cars.filter(el => el.price >= 40000 && el.price <= 60000 && el.year <=2019)
// }
//
// console.log(fillObj(cars))

// =============================================

// const fillObj = (cars, marka) => {
//     return cars.filter(el => el.price >= 40000  && el.make.toLowerCase() === marka.toLowerCase())
// }
//
// console.log(fillObj(cars, 'ford'))