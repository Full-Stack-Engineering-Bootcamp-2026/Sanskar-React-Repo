import React from 'react'
import { useState } from 'react'

const LikeButton = () => {
  const handleClick = ()=>{
        setCount(prev => prev + 1);
    }
    const handleDislikeClick = ()=>{
        if(count > 0)
            setCount(prev=>prev - 1)
    }
    const [count,setCount] = useState(0);
    // const [like,setLike] = useState("Like");
    return (
    <>
        <h3>{count} <span>{count > 1?"Likes":"Like"}</span></h3>
        {/* <button onClick={setCount(prev => prev + 1)}>Like</button> */}
        {count <= 10 ?<button onClick={handleClick}>Like</button>:<button style={{backgroundColor:"red"}} onClick={handleClick}>Like</button>}
        <button onClick={()=>setCount(0)}>Reset</button> 
        <button onClick={handleDislikeClick}>Dislike</button>
    </>
  )
}

export default LikeButton