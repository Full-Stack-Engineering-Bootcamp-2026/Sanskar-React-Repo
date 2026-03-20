import React, { useState } from 'react'
import fetchData from "../../api/api"
import axios from 'axios';

const UserFetcher = () => {
    const [data, setData] = useState({});
    const handleClick = async()=>{
        const response = (await axios.get("https://jsonplaceholder.typicode.com/users")).data;
        console.log(response);
        
        setData(response);
    }
  return (
    <div>
        {data != {}?<>
            <h1>Name:{data[0].name}</h1>
            <h1>Username:{data[0].username}</h1>
        </>:<h1>Loading</h1>}
        <button onClick={handleClick}>Fetch Users</button>
    </div>
  )
}

export default UserFetcher