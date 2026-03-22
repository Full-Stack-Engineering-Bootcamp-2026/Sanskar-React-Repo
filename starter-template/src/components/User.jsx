import React from 'react'

const UserCard = ({name,username}) => {    
    return (
    <li>
        <p>Name: {name}</p>
        <p>Username: {username}</p>
    </li>
  )
}

export default UserCard