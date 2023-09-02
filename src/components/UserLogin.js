import React from 'react'

export default function UserLogin() {
    const isLoggedIn = true;
  return (
    <div>
      {/* {
        isLoggedIn ? <h1>Welcome to edubaba project</h1> :
      <h2>You can not access this project</h2>
      
      } */}

      {
        isLoggedIn && <h1>Hello 1 am logged </h1>
      }
    </div>
  );
}
