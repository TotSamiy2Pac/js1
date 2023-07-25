const row = document.querySelector('.row')
const select = document.querySelector('#select')

let country = 'asia'

const handleFlags = () => {
    row.innerHTML = ``
    fetch(`https://restcountries.com/v3.1/region/${country}`)
        .then(res => res.json())
        .then(data => {
            data.map(country => {
                row.innerHTML += `
                <div class="col-4">
                    <div class="box">
                        <img src="${country.flags.png}" alt="${country.flags.alt}">
                        <h3>${country.name.official}</h3>
                        <p>${country.flags.alt}</p>
                    </div>  
                </div>
                `
            })
        })
}
handleFlags()

const handleOption = () => {
    country = select.value
    handleFlags()
}

select.addEventListener('change', (event) => {
    handleOption()
})