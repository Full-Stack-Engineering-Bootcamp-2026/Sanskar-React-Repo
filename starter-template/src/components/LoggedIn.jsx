import React, { useState } from 'react'

const LoggedIn = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(false);
  return (
    !isLoggedIn?<button onClick={()=>setIsLoggedIn(true)}>Login</button>: <div><h1>User is logged in</h1><button onClick={()=>setIsLoggedIn(false)}>Log Out</button></div> 
  )
}

export default LoggedIn