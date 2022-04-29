import React from "react";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    // submit();
  };

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form id="pizza-form" className="form container" onSubmit={onSubmit}>
      <div className="form-group submit">
        <h2>Build Your Own Pizza</h2>

        <div className="errors">
          <div>{errors.name}</div>
        </div>
      </div>

      <div className="form-group inputs">
        <h4>Start Here</h4>

        <label>
          Name
          <input
            value={values.name}
            onChange={onChange}
            name="name"
            id="name-input"
            type="text"
          />
        </label>

        <label>
          <h4>Choice of Size</h4>
          <select
            value={values.choiceOfSize}
            onChange={onChange}
            name="choiceOfSize"
            id="size-dropdown"
          >
            <option value="">-- Select a Size --</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="xlarge">X-Large</option>
          </select>
        </label>
      </div>

      <div className="form-group radio">
        <h4>Choice of Sauce</h4>
        <label>
          Original
          <input
            type="radio"
            name="choiceOfSauce"
            value="original"
            onChange={onChange}
            checked={values.choiceOfSauce === "original"}
          />
        </label>

        <label>
          Garlic Ranch
          <input
            type="radio"
            name="choiceOfSauce"
            value="garlic-ranch"
            onChange={onChange}
            checked={values.choiceOfSauce === "garlic-ranch"}
          />
        </label>

        <label>
          BBQ Sauce
          <input
            type="radio"
            name="choiceOfSauce"
            value="bbq"
            onChange={onChange}
            checked={values.choiceOfSauce === "bbq"}
          />
        </label>

        <label>
          Spinach Alfredo
          <input
            type="radio"
            name="choiceOfSauce"
            value="spinach-alfredo"
            onChange={onChange}
            checked={values.choiceOfSauce === "spinach-alfredo"}
          />
        </label>
      </div>

      <div className="form-group checkboxes">
        <h4>Add Toppings</h4>
        <label>
          Pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            checked={values.pepperoni}
            onChange={onChange}
          />
        </label>

        <label>
          Mushroom
          <input
            type="checkbox"
            name="mushroom"
            checked={values.mushroom}
            onChange={onChange}
          />
        </label>

        <label>
          Sausage
          <input
            type="checkbox"
            name="sausage"
            checked={values.sausage}
            onChange={onChange}
          />
        </label>

        <label>
          Pineapple
          <input
            type="checkbox"
            name="pineapple"
            checked={values.pineapple}
            onChange={onChange}
          />
        </label>
      </div>

      <div className="form-group special">
        <h4>Special Instructions</h4>

        <label>
          <input
            value={values.special}
            onChange={onChange}
            name="special"
            id="special-text"
            type="text"
          />
        </label>

        <button id="order-button" disabled={disabled}>
          submit
        </button>
      </div>
    </form>
  );
}
