import React from 'react'

export default function Employee(props) {
  const { name, gender, country, age } = props;
  return (
    <div>
      {/* <h2>{employee.name}</h2>
                <h2>{employee.gender}</h2>
                <h2>{employee.country}</h2>
                <h2>{employee.age}</h2> */}

      {/* <h2>{`Name: ${employee.name}, Gender: ${employee.gender}, Country: ${employee.country}, Age: ${employee.age}`}</h2> */}

      <h2>{`Name: ${name}, Gender: ${gender}, Country: ${country}, Age: ${age}`}</h2>
    </div>
  );
}
