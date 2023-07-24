// const btn = document.querySelector('#btn')
// const input = document.querySelector('#input')
//
// let value
//
// input.addEventListener('keyup', (event) => {
//     value = event.target.value
// })
//
// const handleResponse = () => {
//     // fetch('https://swapi.dev/api/people/')
//     //     .then(res => res.json())
//     //     .then(chek => {
//             // console.log(Number(chek.count))
//             if (value <= 83 && value){
//                 fetch(`https://swapi.dev/api/people/${value}/`)
//                     .then(response => response.json())
//                     .then(data => {
//                         // console.log(data.vehicles[0])
//                         if (data.vehicles.length > 0){
//                             fetch(data.vehicles[0])
//                                 .then(cars => cars.json())
//                                 .then(vehicles => {
//                                     if (data.starships.length > 0){
//                                         fetch(data.starships[0])
//                                             .then(stship => stship.json())
//                                             .then(starships => alert(`Hello ${data.name},\nYour brith year : ${data.birth_year} \nYour vehicles model :  ${vehicles.model} \nYour starships model:  ${starships.model} `))
//                                     }
//                                 })
//                         }
//                         else if (data.starships.length > 0) {
//                             fetch(data.starships[0])
//                                 .then(starships => starships.json())
//                                 .then(starships => alert(`Hello ${data.name},\nYour brith year : ${data.birth_year} \nYour vehicles model :  NO \nYour starships model:  ${starships.model} `))
//                         } else {
//                             alert(`Hello ${data.name},\nYour brith year : ${data.birth_year} \nYour vehicles model :  NO \nYour starships model:  NO `)
//                         }
//                     })
//                     .catch(error => console.log(error))
//             }
//             else {
//                 alert('Вы Ввели не корректное число')
//             }
//         // })
//
// }
//
// btn.addEventListener('click', (event) => {
//     handleResponse()
// })
//
// input.addEventListener('keypress', (e) => {
//     if (e.key === 'Enter'){
//         handleResponse()
//     }
// })

// =====================================================================================================================

const increaseBtn = document.querySelector('#Increase')
const decreaseBtn = document.querySelector('#decrease')
const resultSpan = document.querySelector('#asd')
const multiplicationBtn = document.querySelector('#multiplication')
const clearBtn = document.querySelector('#clear')
const alertsWindow = document.querySelector('.alerts')
const closeBtn = document.querySelector('#close')
const oneBtn = document.querySelector('#oneBtn')
const twoBtn = document.querySelector('#twoBtn')
const threeBtn = document.querySelector('#threeBtn')
const fourBtn = document.querySelector('#fourBtn')
const fiveBtn = document.querySelector('#fiveBtn')
const qwe = document.querySelector('#qwe')

const btn = document.querySelectorAll('.chisloBtn')


let chislo = 1
let chek = true
const increase = () => {
    if (Number(resultSpan.innerText) < 100){
        resultSpan.innerText = parseInt(resultSpan.innerText) + chislo
    }
    else {
        alertsWindow.style.opacity = '100'
    }
}

const decrease = () => {
    if (Number(resultSpan.innerText) > 0){
        resultSpan.innerText = parseInt(resultSpan.innerText) - chislo
    }
    else {
        alertsWindow.style.opacity = '100'
    }
}

const close = () => {
    alertsWindow.style.opacity = '0'
}

const multiplication = () => {
    if (Number(resultSpan.innerText) > 0 && parseInt(resultSpan.innerText) * chislo < 100){
        resultSpan.innerText = parseInt(resultSpan.innerText) * chislo
    }
    else {
        alertsWindow.style.opacity = '100'
    }
}




increaseBtn.addEventListener('click', (event) => {
    increase()
})

decreaseBtn.addEventListener('click', (event) => {
    decrease()
})

closeBtn.addEventListener('click', (event) => {
    close()
})

multiplicationBtn.addEventListener('click', (event) => {
    multiplication()
})

oneBtn.addEventListener('click', (event) => {
    chislo  = Number(oneBtn.innerText)
    qwe.innerText = chislo
})
twoBtn.addEventListener('click', (event) => {
    chislo  = Number(twoBtn.innerText)
    qwe.innerText = chislo
})
threeBtn.addEventListener('click', (event) => {
    chislo  = Number(threeBtn.innerText)
    qwe.innerText = chislo
})
fourBtn.addEventListener('click', (event) => {
    chislo  = Number(fourBtn.innerText)
    qwe.innerText = chislo
})
fiveBtn.addEventListener('click', (event) => {
    chislo  = Number(fiveBtn.innerText)
    qwe.innerText = chislo
})
















// btn[0].addEventListener('click', (event)=> {
//     if (chek === true) {
//         btn[0].style.backgroundColor = 'black'
//         chislo = Number(twoBtn.innerText)
//         chek = false
//     }else {
//         btn[0].style.backgroundColor = '#6c757d'
//         chislo = 0
//         chek = true
//     }
// })


// oneBtn.addEventListener('click' , (event) => {
//     if (chek === true) {
//         dis()
//         // twoBtn.setAttribute('disabled', '')
//         // threeBtn.setAttribute('disabled', '')
//         // fourBtn.setAttribute('disabled', '')
//         // fiveBtn.setAttribute('disabled', '')
//         oneBtn.style.backgroundColor = 'black'
//         chislo = Number(oneBtn.innerText)
//         chek = false
//     }else {
//         // twoBtn.disabled = false
//         // threeBtn.disabled = false
//         // fourBtn.disabled = false
//         // fiveBtn.disabled = false
//         oneBtn.style.backgroundColor = '#6c757d'
//         chislo = 0
//         chek = true
//     }
// })
//
// twoBtn.addEventListener('click' , (event) => {
//     if (chek === true) {
//         twoBtn.style.backgroundColor = 'black'
//         chislo = Number(twoBtn.innerText)
//         chek = false
//     }else {
//         twoBtn.style.backgroundColor = '#6c757d'
//         chislo = 0
//         chek = true
//     }
//     dis()
// })
//
// threeBtn.addEventListener('click' , (event) => {
//     if (chek === true) {
//         threeBtn.style.backgroundColor = 'black'
//         chislo = Number(threeBtn.innerText)
//         chek = false
//     }else {
//         threeBtn.style.backgroundColor = '#6c757d'
//         chislo = 0
//         chek = true
//     }
//     dis()
// })
// fourBtn.addEventListener('click' , (event) => {
//     if (chek === true) {
//         fourBtn.style.backgroundColor = 'black'
//         chislo = Number(fourBtn.innerText)
//         chek = false
//     }else {
//         fourBtn.style.backgroundColor = '#6c757d'
//         chislo = 0
//         chek = true
//     }
//     dis()
// })
// fiveBtn.addEventListener('click' , (event) => {
//     if (chek === true) {
//         fiveBtn.style.backgroundColor = 'black'
//         chislo = Number(fiveBtn.innerText)
//         chek = false
//     }else {
//         fiveBtn.style.backgroundColor = '#6c757d'
//         chislo = 0
//         chek = true
//     }
//     dis()
// })
