import React from "react"
import pizza from "../images/Pizza.jpg"


function Homepage () {
    return (
        <main>
        <h1>BloomTech Pizzaria</h1>
        
            <h2>Official home of the BloomTech Pizzaria!</h2>
            <p>Now taking online orders for pizza! Please click the "Order Pizza" link or button to get started!</p>
            <img className="pizza-img" src={pizza} alt="delicious pizza"/>
        </main>
    )
}

export default Homepage