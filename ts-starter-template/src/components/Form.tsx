import type React from "react";
import { useState } from "react";

const Form = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const submitHandler = (event:React.SubmitEvent)=>{
        event.preventDefault();
        console.log(name);
        console.log(email);
    }

    const nameChangeHandler = (event:React.ChangeEvent<HTMLInputElement>)=>{
       setName(event.target.value);
    }
    const emailChangeHandler = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(event.target.value);
    }

    return (
        <form className="form" onSubmit={submitHandler}>
            <div>
                <label htmlFor="name">Name</label>
                <input className="form-input" type="text" name="name" required onChange = {nameChangeHandler}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input className="form-input" type="email" name="email" required onChange={emailChangeHandler}/>
            </div>
            <div>
                <button className="submit-btn">Submit</button>
            </div>
        </form>
    )
}

export default Form