import axios from "axios";

const imageApi = axios.create({
    baseURL: process.env.REACT_APP_REST_IP || 'http://localhost:5000',
    timeout: 20000
})

export const apiImage = id => imageApi.get(`api/image/${id}`, {
    responseType: 'arraybuffer'
});

export const apiImageSize = (id = '') => imageApi.get(`api/imageSize/${id}`)