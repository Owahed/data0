import React from "react";

const Card = ({ d }) => {
  return (
    <div className="card">
      <h1>Name: {d.name}</h1>
      <h3>Age: {d.age}</h3>
      <h4>Dept: {d.dept}</h4>
      <h4>Gender: {d.gender}</h4>
      <h4>Salary: {d.salary}</h4>
    </div>
  );
};

export default Card;
