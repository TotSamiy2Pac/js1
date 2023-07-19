// ======================1=========================
// 1) Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.

// const arrSum = (arr) => {
//     let result = 0
//     for (let i = 0; i < arr.length; i++){
//         result += arr[i]
//     }
//     return result
// }
//
// console.log(arrSum([1, 2, 3, 4, 5]))

// ======================2=========================
// 2) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => сумму всех элементов массива

// const arrSum = (arr) => {
//     return arr.reduce((acc, el) => {
//         return acc + el
//     }, 0)
// }
//
// console.log(arrSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// ======================3=========================
// 3) Дан массив с элементами [1, 2, 5, 9, 4, 13, 4, 10].
//     С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4.
// Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

// const arrSum = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 4){
//             return 'Есть'
//         }
//     }
// }
//
// console.log(arrSum([1, 2, 5, 9, 3, 13, 2, 10]))


function sumArray(array) {
    let sumMaxMin = -(Math.max.apply(null, array) + Math.min.apply(null, array))
    if (array !== null && array !== [] && array){
        // console.log('yes')
        if (array.length > 1) {
            return array.reduce((acc, el) => {
                return acc += el
            }, sumMaxMin)
        }
        else {
            return 0
        }
    }
    else {
        return 0
    }
}

console.log(sumArray([ 0 ]))