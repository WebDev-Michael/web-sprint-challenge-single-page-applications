import React from "react"
import pizza from "../images/Pizza.jpg"
import "../App.css"



const Form = (props) => {
    const {
        values, 
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    

    const onChange = evt => {
        const {name, value, checked, type} = evt.target
        const valueToUse = type === "checkbox" ? checked: value
        change(name, valueToUse)
    }


    return (
        <div className="Form">
            <img className="pizza-img" src={pizza} alt = "delicious pizza" />
            <h2>Customize Your Pizza</h2>
            <br/>
            <div className="errors">
                <p>{errors.name}</p>
                <p>{errors.size}</p>
                <p>{errors.sauce}</p>
            </div>
            <form id="pizza-form" onSubmit={onSubmit}>

                <label>Name:
                    <input
                    type="text"
                    name="name"
                    id="name-input"
                    value={values.name}
                    onChange={onChange}
                    />
                </label>
                <br/>

        {/* Dropdown menu */}
                <h4>Select Pizza Size (required)</h4>

                <label> 
                    <select id="size-dropdown">
                        <option name="" value="">---select an option---</option>
                        <option name="small" value="small">Small (8 inch)</option>
                        <option name="medium" value="medium">Medium (12 inch)</option>
                        <option name="large" value="large">Large (16 inch)</option>
                    </select>
                </label>

        {/*Radio Inputs*/}
                <h4>Choice of Sauce (required)</h4>
            <div className="sauce">
                <label>Original Red Sauce
                    <input 
                    type="radio"
                    name="sauce"
                    value="original"
                    onChange={onChange}
                    checked={values.sauce==="original"}
                    />
                </label>
                <label>Creamy Alfredo Sauce
                    <input 
                    type="radio"
                    name="sauce"
                    value="alfredo"
                    onChange={onChange}
                    checked={values.sauce==="alfredo"}
                    />
                </label>
                <label>Pesto Sauce
                    <input 
                    type="radio"
                    name="sauce"
                    value="pesto"
                    onChange={onChange}
                    checked={values.sauce==="pesto"}
                    />
                </label>
                <label>BBQ Sauce
                    <input 
                    type="radio"
                    name="sauce"
                    value="bbq"
                    onChange={onChange}
                    checked={values.sauce==="bbq"}
                    />
                </label>
            </div>

        {/*Checkbox Inputs*/}

                <h4>Select your toppings (up to 10)</h4>

            <div className="toppings">
                <label>Pepperoni
                    <input
                    type="checkbox"
                    name="pepperoni"
                    checked={values.pepperoni}
                    onChange={onChange}
                    />
                </label>
                <label>Sausage
                    <input
                    type="checkbox"
                    name="sausage"
                    checked={values.sausage}
                    onChange={onChange}
                    />
                </label>
                <label>Canadian bacon
                    <input
                    type="checkbox"
                    name="canadianBacon"
                    checked={values.canadianBacon}
                    onChange={onChange}
                    />
                </label>
                <label>Spicy Italian Sausage
                    <input
                    type="checkbox"
                    name="spicyItalianSausage"
                    checked={values.spicyItalianSausage}
                    onChange={onChange}
                    />
                </label>
                <label>Grilled Chicken
                    <input
                    type="checkbox"
                    name="grilledChicken"
                    checked={values.grilledChicken}
                    onChange={onChange}
                    />
                </label>
                <label>Green peppers
                    <input
                    type="checkbox"
                    name="greenPeppers"
                    checked={values.greenPeppers}
                    onChange={onChange}
                    />
                </label>
                <label>Olives
                    <input
                    type="checkbox"
                    name="olives"
                    checked={values.olives}
                    onChange={onChange}
                    />
                </label>
                <label>Pineapple
                    <input
                    type="checkbox"
                    name="pineapple"
                    checked={values.pineapple}
                    onChange={onChange}
                    />
                </label>
                <label>Onion
                    <input
                    type="checkbox"
                    name="onion"
                    checked={values.onion}
                    onChange={onChange}
                    />
                </label>
                <label>Diced Tomatos
                    <input
                    type="checkbox"
                    name="dicedTomatos"
                    checked={values.dicedTomatos}
                    onChange={onChange}
                    />
                </label>
                <label>Roasted Garlic
                    <input
                    type="checkbox"
                    name="roastedGarlic"
                    checked={values.roastedGarlic}
                    onChange={onChange}
                    />
                </label>
                <label>Artichoke Hearts
                    <input
                    type="checkbox"
                    name="artichokeHearts"
                    checked={values.artichokeHearts}
                    onChange={onChange}
                    />
                </label>
                <label>Three Cheese
                    <input
                    type="checkbox"
                    name="threeCheese"
                    checked={values.threeCheese}
                    onChange={onChange}
                    />
                </label>
                <label>Extra Cheese
                    <input
                    type="checkbox"
                    name="extraCheese"
                    checked={values.extraCheese}
                    onChange={onChange}
                    />
                </label>
            </div>

                <h4>Choice of Substitution</h4>

                <label>Gluten Free Crust
                    <input
                    type="checkbox"
                    name="gfc"
                    checked={values.gfc}
                    onChange={onChange}
                    />
                </label>

                <h4>Special Instructions</h4>

                <input
                id="special-text"
                type="text"
                name="specialInstruction"
                value={values.specialInstruction}
                onChange={onChange}
                />

                <button id="order-button" disabled={disabled}>Add to Order</button>
            </form>

        </div>
    )
}

export default Form