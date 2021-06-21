import axios from "axios";

const imageApi = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 5000
})

export const apiImage = id => imageApi.get(`api/image/${id}`, {
    responseType: 'arraybuffer'
});

export const apiImageSize = id => imageApi.get(`api/imageSize/${id}`)