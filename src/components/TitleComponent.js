import React, { useState } from "react";
export function TitleComponent() {
    const[title, setTitle] = useState('React Js Course For Beginners')
  return (
    <div>
        <h1>{title}</h1>
        <button onClick={()=>setTitle('Ultimate React Hooks Course')}>Change Title</button>
    </div>
  );
}
