import React from "react";
export function DemoComponent({name, country, children}) {
  // console.log(props);
  // props.name ='daisy'
  return (
    <div>
      <h1>
        Saya {name} Dari {country}
      </h1>
      <h2>{children}</h2>
    </div>
  );
}
