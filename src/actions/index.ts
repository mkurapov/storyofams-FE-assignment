import api from '../api';
import { ISearchQuery, IImage } from '../types';

export const FETCH_IMAGES_PENDING = 'FETCH_IMAGES_PENDING';
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS';
export const FETCH_IMAGES_ERROR = 'FETCH_IMAGES_ERROR';
export const TOGGLE_SAVED_IMAGE = 'TOGGLE_SAVED_IMAGE';

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

function toggleImageAsFavourite(image:IImage) {
    return {
        type: TOGGLE_SAVED_IMAGE,
        image: image
    }
}

export const toggleSavedImage = (image:IImage) => {
    return (dispatch:any) => dispatch(toggleImageAsFavourite(image));
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