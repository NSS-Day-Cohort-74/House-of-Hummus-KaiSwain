export const getSales = async () => {
    const response = await fetch("http://localhost:8080/purchases?_expand=entree&_expand=vegetable&_expand=side")
    const sales = await response.json()

    let html = ""
      html += sales.map((sale) => `
    Reciept #1 = $${sale.vegetable.price + sale.side.price + sale.entree.price} <br>
    `).join("")

    

    return html
}

