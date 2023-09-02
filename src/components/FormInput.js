import React, { useState } from "react";

export default function FormInput() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [skill, setSkill] = useState("react js");
  console.log(name);
  console.log(address);
  console.log(skill);

  const handleSubmit =(evt) =>{
    evt.preventDefault ( )
    alert (`${name} ${address} ${skill}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name :
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Address :
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>Skill :</label>
        <select value={skill} onChange={(e) => setSkill(e.target.value)}>
          <option value="react">React js </option>
          <option value="angular">Angular </option>
          <option value="vue">Vue js </option>
        </select>
      </div>

      <div>
        <button type="submit" value="submit">
          Submit Button
        </button>
      </div>
    </form>
  );
}
