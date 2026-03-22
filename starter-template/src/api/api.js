import axios from "axios"

const fetchQuotes = async ()=>{
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${Math.ceil(Math.random()*100)}`)
    return response.data;
}

const fetchUsers = async ()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
}

export default {fetchQuotes,fetchUsers};