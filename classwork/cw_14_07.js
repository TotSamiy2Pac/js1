const arrayObj = [
    {
        name: 'Vasya',
        age: 20,
        isMarried: false,
        gender : 'male'
    },
    {
        name: 'Petr',
        age: 29,
        isMarried: true,
        gender : 'male'
    },
    {
        name: 'Volodya',
        age: 25,
        isMarried: true,
        gender : 'male'
    },
    {
        name: 'Lera',
        age: 20,
        isMarried: false,
        gender : 'female'
    },
    {
        name: 'Nikita',
        age: 30,
        isMarried: false,
        gender : 'male'
    }
]


const hundleChek = (array) => {
    console.log('всех мужчин которые младше 24 и не женатые')
    return arrayObj.filter(user => user.gender === 'male' && user.age < 24 && !user.isMarried)
}
const chekGender = (array) => {
    console.log('только женщин')
    return arrayObj.filter((user => user.gender === 'female'))
}

const chekAgeAndMarried = (array) => {
    console.log('старше 24 женатые')
    return arrayObj.filter(({age, isMarried}) => age > 24 && isMarried)
}

console.log(hundleChek(arrayObj))
console.log(chekGender(arrayObj))
console.log(chekAgeAndMarried(arrayObj))


// старше 24 женатые
// только женщин
// всех мужчин которые младше 24 и не женатые