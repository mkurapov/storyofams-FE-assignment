import axios from 'axios';

const key = '5d77c8d6ce4366be0de5f49961f7f5e7c58865dcd5066ee7f41eb87c194ab9f3';
const url = 'https://api.unsplash.com';

export default axios.create({
    baseURL: url,
    headers: {
        Authorization: `Client-ID ${key}`
    }
});