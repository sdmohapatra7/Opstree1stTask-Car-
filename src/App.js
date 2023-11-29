import "./styles.css";
import AddCarForm from "./components/AddCarForm";
import ShowCar from "./components/ShowCar";
import React, { useState } from "react";
export default function App() {
  const [cars, setCars] = useState([]);
  const AddCar = (newCar) => {
    const indexPresent = cars.findIndex(
      (car) => car.name === newCar.name && car.model === newCar.model,
    );
    if (indexPresent !== -1) {
      const updateCar = [...cars];
      updateCar[indexPresent].quantity += newCar.quantity;
      setCars(updateCar);
    } else {
      setCars([...cars, newCar]);
    }
    console.log(cars);
  };
  return (
    <div className="App">
      <h1>Cars</h1>
      <AddCarForm AddCar={AddCar} />
      <ShowCar cars={cars} />
    </div>
  );
}
