const handleResponse = () => {
    fetch('https://swapi.dev/api/people/3/')
        .then(response => response.json())
        .then(data => {
            // console.log(data.vehicles[0])
            if (data.vehicles.length > 0){
                fetch(data.vehicles[0])
                    .then(cars => cars.json())
                    .then(vehicles => {
                        if (data.starships.length > 0){
                            fetch(data.starships[0])
                                .then(stship => stship.json())
                                .then(starships => alert(`Hello ${data.name},\nYour brith year : ${data.birth_year} \nYour vehicles model :  ${vehicles.model} \nYour starships model:  ${starships.model} `))
                        }
                    })
            }
            else if (data.starships.length > 0) {
                fetch(data.starships[0])
                    .then(starships => starships.json())
                    .then(starships => alert(`Hello ${data.name},\nYour brith year : ${data.birth_year} \nYour vehicles model :  NO \nYour starships model:  ${starships.model} `))
            } else {
                alert(`Hello ${data.name},\nYour brith year : ${data.birth_year} \nYour vehicles model :  NO \nYour starships model:  NO `)
            }
        })
        .catch(error => console.log(error))
}

handleResponse()

// ===============================================================================================

// const  handleResponse = () => {
//
//     fetch('https://swapi.dev/api/people/1/')
//         .then(response => response.json())
//         .then(data => {
//             // console.log(data)
//             let mashin = []
//             if (data.vehicles.length > 0){
//                 // console.log(data.vehicles)
//                 for (let i = 0; i < data.vehicles.length; i++){
//                     fetch(data.vehicles[i])
//                         .then(cars => cars.json())
//                         .then(car => {
//                              mashin.push(car.name)
//                             // console.log(mashin, 'mashiny')
//                         })
//                 }
//                 setTimeout(() => {  console.log(mashin, 'all mashinys'); }, 1000);
//                 // data.vehicles.map((el, i) => {
//                 //     fetch(data.vehicles[i])
//                 //         .then(cars => cars.json())
//                 //         .then(car => {
//                 //             mashin.push(car.name)
//                 //             // console.log(mashin, 'mashiny')
//                 //         })
//                 //         .finally(() => {
//                 //             console.log(mashin)
//                 //         })
//                 // })
//                 // console.log(mashin.map(el => {
//                 //     return el, 'el mam'
//                 // }))
//
//             }
//             else {
//                 console.log('vehicles 0')
//             }
//         })
//         .catch(error => console.log(error))
// }
//
// handleResponse()
