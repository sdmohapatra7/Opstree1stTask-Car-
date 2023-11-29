import React, { useState } from "react";
const AddCarForm = ({ AddCar }) => {
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [quantity, setQuantity] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && model && quantity) {
      AddCar({ name, model, quantity: parseInt(quantity) });
      setName("");
      setModel("");
      setQuantity("");
    }
  };
  return (
    <div>
      <h2>add car</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Model:
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
        </label>
        <br />
        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default AddCarForm;
