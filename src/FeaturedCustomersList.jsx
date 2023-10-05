import React from "react";
import "./App.css";
import "./normalize.css";
import FreelancerList from './FreelancerList'; // Reuse the FreelancerList component
import CustomerData from "./CustomerData"; // Import your Featured Customers data

function FeaturedCustomersList() {
  return (
    <div>
      <h1 className="intro"><center>Featured Customers</center></h1>
      <FreelancerList data={CustomerData} /> {/* Reuse the FreelancerList component and pass in the Featured Customers data */}
    </div>
  );
}

export default FeaturedCustomersList;
