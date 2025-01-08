import { getEntrees } from "./Entrees.js"
import { getSales } from "./Sales.js"
import { getSides } from "./SideDishes.js"
import { getVeggies } from "./Vegetables.js"

//import { Sales } from "./Sales.js"

export const FoodTruck = async () => {
    //const salesHTML = await Sales()
    const entreeHTML = await getEntrees()
    const sideHTML = await getSides()
    const veggieHTML = await getVeggies()
    const salesHTML = await getSales()
    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <article>
        ${entreeHTML}
        ${sideHTML}
        ${veggieHTML}
        <p>---------------------------------</p>
        <br>
        
        <button id="purchase" >Purchase Combo</button>
        </article>
        
        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
            </article>
            
            `
        }
        
        //${salesHTML}