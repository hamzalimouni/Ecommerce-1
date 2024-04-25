import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGZlODkxYWQ2YmIzYmMzN2IyMDU2MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NDQwMTg3MSwiZXhwIjoxNjg0NjYxMDcxfQ.564cO54hivm75h3Zv6ZnTaPZoxK0GwENpKWjD0YrtHA";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    // headers: { token: `Bearer ${TOKEN}` }
})