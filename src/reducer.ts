
import {FETCH_IMAGES_PENDING, FETCH_IMAGES_SUCCESS, FETCH_IMAGES_ERROR, SAVE_IMAGE, saveImage } from './actions';

const initialState = {
    savedImages: [],
    currentQuery: {
        term: '',
        page: 0,
        isLoading: false,
        error: {},
        results: []
    }
}

export default function imagesReducer(state = initialState, action:any) : any {
    switch(action.type) {
        case FETCH_IMAGES_PENDING: 
            return {
                ...state,
                currentQuery: {
                    ...state.currentQuery,
                    isLoading: true
                }
            }
        case FETCH_IMAGES_SUCCESS:
            console.log('in reducer with action, ', action.images);
            return {
                ...state,
                currentQuery: {
                    ...state.currentQuery,
                    results: [...state.currentQuery.results, ...action.images]
                }
            }
        case FETCH_IMAGES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case SAVE_IMAGE:
            console.log(action);
            return {
                ...state,
                savedImages: [...state.savedImages, action.image]
            }
        default: 
            return state;
    }
}

