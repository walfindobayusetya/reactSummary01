import React from 'react'


export default function Inline() {
    const heading = {
        fontSize: '100px',
        color: 'tomato'
    }
    const heading2 = {
        fontSize: '100px',
        color: 'blue'
    }
  return (
    <div>
      <h1 style={heading}>my name is edubaba</h1>
      <h2 style={heading2}>this is the second h2 tag </h2>
      <h2 className="error">Error!! From Inline</h2>
    </div>
  );
}
