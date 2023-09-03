import React, { useState, useCallback } from "react";
import ButtonComponent from "./ButtonComponent";
import CounterComponent from "./CounterComponent";

function MainComponent() {
  const [teachers, setTeachers] = useState(25);
  const [students, setStudents] = useState(50);

    const incrementTeachers = useCallback(() => {
      setTeachers(teachers + 5);
    }, [teachers]);

    const incrementStudents = useCallback(() => {
      setStudents(students + 10);
    }, [students]);

  
  return (
    <div>
      <h3>useCallback Practice </h3>
      <CounterComponent text="I Teachers" count={teachers} />
      <ButtonComponent handleClick={incrementTeachers}>
        increment teachers
      </ButtonComponent>
      <CounterComponent text="Students" count={students} />
      <ButtonComponent handleClick={incrementStudents}>
        increment students
      </ButtonComponent>
    </div>
  );
}

export default React.memo(MainComponent);
