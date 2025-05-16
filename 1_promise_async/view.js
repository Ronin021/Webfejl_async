class DataViewController{
#div

    constructor(){
        const div1 = document.createElement("div")
        div1.textContent = `loading...`
        this.#div = div1
        document.body.appendChild(this.#div)

    }

    renderData(array){
        this.#div.innerHTML = "";
        for (const elem of array) {
            const div = document.createElement('div')
            div.textContent = (`${elem.name} - ${elem.age} - ${elem.sex}`)
            document.body.appendChild(div)


        }
    }
}