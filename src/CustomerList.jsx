import React from "react";
import "./App.css";
import "./normalize.css";
import Customer from './Customer'; // Import the Customer component
import CustomerData from "./CustomerData"; // Import your data for Featured Customers

function CustomerList() {
  return (
    <div>
      <div className="row">
        {/* Map and render the Featured Customers */}
        {CustomerData.map((customer, index) => (
          <Customer
            key={index}
            avatar={customer.avatar}
            name={customer.name}
            description={customer.description}
            rating={customer.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default CustomerList;
