import { setVeggieId } from "./transientState.js"

export const getVeggies = async () => {
    document.addEventListener("change", handleChange)
const response = await fetch("http://localhost:8080/vegetables")
const veggies = await response.json()
let html = "<h2>veggies</h2>"
html += veggies.map((veggie) => `
<input type="radio" name="veggie" value="${veggie.id}"/> ${veggie.type}
`)

    return html
}


const handleChange = (changeEvent) => {
    if (changeEvent.target.name === "veggie") {
        setVeggieId(changeEvent.target.value)
        console.log(changeEvent.target.value)
    }
}