import axios from 'axios'
import KEYS from './keys.json';

const API_KEY= KEYS.key;


export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        key: API_KEY,
        part: 'snippet',
        type: 'video',
        maxResults: 5
    }
});