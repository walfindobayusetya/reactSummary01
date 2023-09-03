import React, {useState, useEffect} from 'react'

export default function EffectExample3() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition =(e) =>{
        console.log ('this is mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log ('useffect is called')
        window.addEventListener ('mousemove', logMousePosition)

        return () => {
          window.removeEventListener("mousemove", logMousePosition);
          console.log("component is unmounted, and the code is clean");
        }
    },[])
  return (
    <div>
      <p>mouse position</p>
      coordinate X,Y - {x}, {y}
    </div>
  );
}
