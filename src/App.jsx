import { useState } from 'react'
import './App.css'

function App() {
  const date = new Date();
  const [time, setTime] = useState(date.toLocaleTimeString());
  const [greet, setGreet] = useState('Day');
  setInterval(() => {
    setTime(date.toLocaleTimeString())
  }, 1000)
  setInterval(() => {
    const hr = date.getHours();
    if (hr >= 0 && hr < 12) setGreet("Morning")
    else if (hr >= 12 && hr <= 6) setGreet("Afternoon")
    else setGreet("Evening")
  }, 1000)
  return (
    <div className='app' style={{ width: '25%', padding: '1%', color: 'orange' }}>
      <h1>Good {greet}</h1>
      <ul>
        <li><h2>Sanskar Rajput</h2></li>
        <li><h3>{date.toLocaleDateString()}</h3></li>
        <li id='time'><h4>Time: {time}</h4></li>
      </ul>
      <h1></h1>
    </div>
  )
}

export default App
