import axios from 'axios';
import { API_BASEURL, API_KEY } from '../const';

export default axios.create({
    baseURL: API_BASEURL,
    headers: {
        Authorization: `Client-ID ${API_KEY}`
    }
});