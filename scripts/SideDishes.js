import { setSideId } from "./transientState.js"


export const getSides = async () => {
    document.addEventListener("change", handleChange)
    const response = await fetch("http://localhost:8080/sides")
    const sides = await response.json()
    let html = '<h2>sides</h2>'
    html += sides.map((side) => `
    <input type="radio" name="side" value="${side.id}"/> ${side.title}
    `).join("")

    return html
}

const handleChange = (changeEvent) => {
    if (changeEvent.target.name === "side") {
        setSideId(changeEvent.target.value)
        console.log(changeEvent.target.value)
    }
}