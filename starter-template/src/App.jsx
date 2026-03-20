import { useState } from 'react'
import './App.css'
import QuoteFetcher from './assets/components/QuoteFetcher'
import UserFetcher from './assets/components/UserFetcher'

function App() {

  return (
    <div className='app'>
      <QuoteFetcher/>
      {/* <UserFetcher/> */}
    </div>
  )
}

export default App
