import React, { useState } from 'react'
import fetch from '../api/api'


const QuoteFetcher = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    setLoading(true);
    const response = await fetch.fetchQuotes();
    setData(response);
    setLoading(false);
  }
  return (
    <div className='quote'>
      {loading ? <h1>Loading...Please Wait...</h1> : <>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
      </>}

      <button className='fetch-btn' onClick={handleClick}>Fetch</button>
    </div>
    
    
  )
}

export default QuoteFetcher