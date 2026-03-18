import React from 'react'

const UserCard = ({user}) => {

  const {name, bio, role="member"} = user

  return (
    <div className="card">
            <h1>{name}</h1>
            <p>{bio}</p>  
            <p>{role}</p>
    </div>
  )
}

export default UserCard