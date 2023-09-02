import React from "react";
import Employee from "./Employee";

export default function EmployeeList() {
  const employees = [
    {
      name: "Walfindo",
      gender: "male",
      country: "Indonesia",
      age: "24",
      id: 1,
    },
    {
      name: "Bayu",
      gender: "male",
      country: "Indonesia",
      age: "24",
      id: 2,
    },
    {
      name: "Setya",
      gender: "male",
      country: "Indonesia",
      age: "24",
      id: 3,
    },
    {
      name: "Aldo",
      gender: "male",
      country: "Indonesia",
      age: "24",
      id: 4,
    },
  ];
  return (
    <div>
      {/* <h2>{employees[0]}</h2>
      <h2>{employees[1]}</h2>
      <h2>{employees[2]}</h2>
      <h2>{employees[3]}</h2> */}
      {employees.map((employee) => (
        // const { name, gender, country, age } = employee;
        // return (
        //   <div>
        //     {/* <h2>{employee.name}</h2>
        //         <h2>{employee.gender}</h2>
        //         <h2>{employee.country}</h2>
        //         <h2>{employee.age}</h2> */}

        //     {/* <h2>{`Name: ${employee.name}, Gender: ${employee.gender}, Country: ${employee.country}, Age: ${employee.age}`}</h2> */}

        //     <h2>{`Name: ${name}, Gender: ${gender}, Country: ${country}, Age: ${age}`}</h2>
        //   </div>
        // );
        <div key={employee.id}>
          <Employee
            name={employee.name}
            gender={employee.gender}
            country={employee.country}
            age={employee.age}
          />
        </div>
      ))}
    </div>
  );
}
