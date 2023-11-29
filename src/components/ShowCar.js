import React from "react";
const ShowCar = ({ cars }) => {
  return (
    <div>
      <h2>Here All cars</h2>
      <ul>
        {cars.map((car, index) => (
          <li>
            carName:{car.name},carModel:{car.model},Quantity:{car.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowCar;
