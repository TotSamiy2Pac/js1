// const array = (arr) => {
//     return arr.reduce((acc, el) => {
//         return acc + el
//     }, 0)
// }
//
// console.log(array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// const str = (arg) => {
    // let a = []
    // for (let i = 0 ; i < arg.length; i++) {
    //     if (i % 2 === 0) {
    //         a.push(arg[i])
    //     }
    // }
    // // return a.join('')

    // return arg.split('').reduce((acc, el, idx) => {
    //     if (idx % 2 === 0) {
    //        acc.push(el)
    //     }
    //     return acc
    // }, [])
// }



// console.log(str('Lorem ipsum dolor sit amet'))


const piramida = (num, str) => {
    let sum = ''
    for (let i = 0; i < 1; i++){
        for (let j = 0; j < num; j++){
            sum += ' ' + str
            console.log(sum)
        }
    }
}

piramida(10, 'x')