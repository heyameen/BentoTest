import Axios from "axios";


const API_URL = 'https://reqres.in/api'

const api = Axios.create({
    baseURL: API_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default api;