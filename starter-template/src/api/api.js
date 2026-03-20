import axios from "axios"

const fetchQuotes = async ()=>{
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${Math.ceil(Math.random()*100)}`)
    console.log(response.data);
    
    return response.data;
}

const fetchUsers = async ()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(response.data);
    
}

export default fetchQuotes;