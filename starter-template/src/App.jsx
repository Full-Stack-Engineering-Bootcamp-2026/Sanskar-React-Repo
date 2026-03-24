import { useState } from 'react'
import LoggedIn from './components/LoggedIn'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoggedIn />
    </>
  )
}

export default App
