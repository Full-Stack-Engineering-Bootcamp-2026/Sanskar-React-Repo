import React, { useState } from 'react'
import fetch from "../api/api"
import User from './User';

const UserFetcher = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleClick = async () => {
        setLoading(true);
        const response = await fetch.fetchUsers();
        setData(response);
        setLoading(false);
        // console.log(response);
        
    }
    return (
        <div className='users'>
            {loading ? <h1>Loading...Please Wait...</h1>: <ol>
                {data.map(user => {                          
                    return <User name = {user.name} username = {user.username} key = {user.id}/>
                })}
            </ol>}
            <button onClick={handleClick}>Fetch Users</button>
        </div>
    )
}

export default UserFetcher