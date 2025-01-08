import { setEntreeId } from "./transientState.js"


export const getEntrees = async () => {
    document.addEventListener("change", handleChange)
    const response = await fetch("http://localhost:8080/entrees")
    const entrees = await response.json()
    let html = '<h2>entrees</h2>'
    
    for (const entree of entrees) {
        html += `<div>
        <input type="radio" name="entree" value="${entree.id}"/> ${entree.name}
        </div>`
        }
        return html
} 

const handleChange = (changeEvent) => {
    if (changeEvent.target.name === "entree") {
        setEntreeId(changeEvent.target.value)
        console.log(changeEvent.target.value)
    }
}