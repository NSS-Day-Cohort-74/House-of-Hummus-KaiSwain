const tranState = {
    "entreeId" : 0,
    "vegetableId" : 0,
    "sideId" : 0
}



export const setEntreeId = (id) => {
    tranState.entreeId = id
}
export const setVeggieId = (id) => {
    tranState.vegetableId = id
}
export const setSideId = (id) => {
    tranState.sideId = id

}

const Order = async (clickEvent) => {
    if( clickEvent.target.id === "purchase") {
        
        const postOrder = {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(tranState)
        } 
        const response = await fetch("http://localhost:8080/purchases", postOrder)
        const customEvent = new CustomEvent("New Purchase")
        document.dispatchEvent(customEvent)
        console.log(tranState)
    }
}
document.addEventListener("click", Order)

