import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserCard from './UserCard'

function App() {

  const users = [{ name: "User 1", bio: "This is a bio for user 1", role: "User" }, { name: "User 2", bio: "This is a bio for user 2", role: "User" }, { name: "User 3", bio: "This is a bio for user 3", role: "User" }, { name: "User 4", bio: "This is a bio for user 4", role: "User" }, { name: "User 5", bio: "This is a bio for user 5" }]
  return (
    <div className='container'>
      <UserCard user = {{name:"User 1" ,bio:"This is a bio for user 1" ,role:"User"}} />
      <UserCard user = {{name:"User 2" ,bio:"This is a bio for user 2" ,role:"User"}} />
      <UserCard user = {{name:"User 3" ,bio:"This is a bio for user 3" ,role:"User"}} />
      <UserCard user = {{name:"User 4" ,bio:"This is a bio for user 4" ,role:"User"}} />
      <UserCard user = {{name:"User 5" ,bio:"This is a bio for user 5"}} />
    </div>
    // <div className="container">
    //   {users.map((user) => {
    //     <UserCard u={user} />
    //   })}
    // </div>
  )
}

export default App
