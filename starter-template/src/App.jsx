import { useState } from 'react'
import './App.css'
import QuoteFetcher from './components/QuoteFetcher'
import UserFetcher from './components/UserFetcher'

function App() {

  return (
    <div className='app'>
      <QuoteFetcher/>
      <UserFetcher/>
    </div>
  )
}

export default App
