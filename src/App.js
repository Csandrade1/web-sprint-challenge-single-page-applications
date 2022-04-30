import React, { useState, useEffect } from "react";
import Form from "./form/Form";
import HomePage from "./home/HomePage";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import schema from "./Validation/formSchema";
import Header from "./components/Header";
import "./App.css";

const initialFormValues = {
  name: "",
  choiceOfSize: "",
  choiceOfSauce: "",
  pepperoni: false,
  mushroom: false,
  sausage: false,
  pineapple: false,
  special: "",
};

const initialPizza = [];
const initialDisabled = true;

const initialFormErrors = {
  name: "",
  choiceOfSize: "",
  choiceOfSauce: "",
};

const App = () => {
  const [pizzas, setPizzas] = useState(initialPizza);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/pizza">
          <Form
            values={formValues}
            change={inputChange}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
