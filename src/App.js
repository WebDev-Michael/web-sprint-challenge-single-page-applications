import React, { useState, useEffect } from "react";
import {Link, Switch, Route} from "react-router-dom"
import "./App.css"
import logo from "./images/logo192.png"
import Form from "./components/Form"
import Homepage from "./components/Homepage"
import schema from "./validation/formSchema"
import * as yup from "yup"
import axios from "axios"

const initialFormValues = {
  size: "",
  sauce: "",
  pepperoni: false,
  sausage: false,
  canadianBacon: false,
  spicyItalianSausage: false,
  grilledChicken: false,
  greenPeppers: false,
  olives:false,
  pineapple: false,
  onion: false,
  dicedTomatos: false,
  roastedGarlic: false,
  artichokeHearts: false,
  threeCheese: false,
  extraCheese: false,
  gfc: false,
  specialInstruction: ""
}


const initialFormErrors = {
  size: "",
  sauce: ""
}

const initialDisabled = true

function App() {

  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [disabled, setDisabled] = useState(initialDisabled)

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ""}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const postNewPizza = newPizza => {
    axios.post("https://reqres.in/api/orders", newPizza)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.error(err)
    .finally(() => setFormValues(initialFormValues))
    })
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  const formSubmit = () => {
    const newPizza = {
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      specialInstruction: formValues.specialInstruction.trim(),
      toppings: ["pepperoni", "sausage", "canadianBacon", "spicyItalianSausage", "grilledChicken", "greenPeppers", "olives", "pineapple", "onion", "dicedTomatos", "roastedGarlic", "artichokeHearts", "threeCheese", "extraCheese"].filter(topping => !!formValues[topping]),
      substitution: formValues.gfc.trim()
    }
    postNewPizza(newPizza);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="react symbol"/>
        <nav className="App-nav">
          <Link className="App-link" id="home" to="/">Home</Link>
          <Link className="App-link" id="order-pizza" to="/pizza">Order Pizza</Link>
        </nav>        
      </header>
      
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/pizza">
            <Form 
              values={formValues}
              change={inputChange}
              submit={formSubmit}
              disabled={disabled}
              errors={formErrors}
            />
          </Route>
        </Switch>
      
      
    </div>
  )
}
export default App;
