// action.js
import api from './api';

export const FETCH_IMAGES_PENDING = 'FETCH_IMAGES_PENDING';
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS';
export const FETCH_IMAGES_ERROR = 'FETCH_IMAGES_ERROR';
export const SAVE_IMAGE = 'SAVE_IMAGE';

function fetchImagesPending() {
    return {
        type: FETCH_IMAGES_PENDING
    }
}

function fetchImagesSuccess(images:any) {
    return {
        type: FETCH_IMAGES_SUCCESS,
        images: images
    }
}

function fetchImagesError(error:any) {
    return {
        type: FETCH_IMAGES_ERROR,
        error: error
    }
}

export function saveImage(image:any) {
    return {
        type: SAVE_IMAGE,
        image:image
    }
}

export const fetchImages = (query:string) => {
    return (dispatch:any) => {
        dispatch(fetchImagesPending());
        console.log(query);
        return api.get('/search/photos?page=1&query=office')
        .then(res => {
            const images = res.data.results;
            dispatch(fetchImagesSuccess(images));
            console.log(images);
            return res;
        })
        .catch(error => {
            dispatch(fetchImagesError(error));
        })
    }
}