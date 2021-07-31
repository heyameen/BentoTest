import Axios from "axios";

// const proxyurl = "https://cors-anywhere.herokuapp.com/";
const API_URL = 'https://reqres.in/api'

const api = Axios.create({
    baseURL: API_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': API_URL
    }
});

export default api;