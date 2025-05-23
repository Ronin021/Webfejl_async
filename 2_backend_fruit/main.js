const form = document.getElementById("fruitpost")
const nameV = document.getElementById("name").value
const priceV = document.getElementById("price").value


form.addEventListener("submit", (e)=>{
    e.preventDefault()
   
    const adatok = {
        name: nameV,
        price: priceV
    }

    fetch("http://127.0.0.1:63013/fruits",{ method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(adatok)

    }).then((response) => { const visszateres = response.json()})
    .then((adatok) =>
    
    console.log(adatok)
    )


})


