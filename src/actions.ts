import api from './api';
import { ISearchQuery } from './types';

export const FETCH_IMAGES_PENDING = 'FETCH_IMAGES_PENDING';
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS';
export const FETCH_IMAGES_ERROR = 'FETCH_IMAGES_ERROR';
export const SAVE_IMAGE = 'SAVE_IMAGE';

function fetchImagesPending() {
    return {
        type: FETCH_IMAGES_PENDING
    }
}

function fetchImagesSuccess(query:ISearchQuery) {
    return {
        type: FETCH_IMAGES_SUCCESS,
        query: query
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
        image: image
    }
}

export const fetchImages = (query:ISearchQuery) => {
    return (dispatch:any) => {
        dispatch(fetchImagesPending());
        console.log(query);
        return api.get(`/search/photos?query=${query.searchTerm}&page=${query.page}`)
        .then(res => {
            const isNewSearch = query.page == 1;
            const queryResult = {
                ...query,
                results: isNewSearch ? res.data.results : [...query.results, ...res.data.results]
            }
            dispatch(fetchImagesSuccess(queryResult));
            return res;
        })
        .catch(error => {
            dispatch(fetchImagesError(error));
        })
    }
}