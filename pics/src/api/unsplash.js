import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: 'Client-ID a7201dc2e0f593d5afec59f5df5b8b5bd61c860877042f34d21078fade0469c8'
    }
})