import React from 'react'

export default function ClickEventHandler() {
    function clickHandler() {
      console.log("You clicked the action buton");
    }
  return (
    <button onClick={clickHandler}>Action</button>
  )
}
