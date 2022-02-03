import axios from "axios";

export default axios.create (

    {
        baseURL:'https://api.unsplash.com',
        headers: {
            Authorization: "Client-ID TuR-Qjt6cYZSsUKvkS-udX92d4E4nNSNE3SIzh-bGQ8"
        }
    }
)