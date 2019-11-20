import { AppState, Image, SearchQuery } from './types';

import {FETCH_IMAGES_PENDING, FETCH_IMAGES_SUCCESS, FETCH_IMAGES_ERROR, SAVE_IMAGE, saveImage } from './actions';

const initialState:AppState = {
    savedImages: [],
    searchQuery: {
        searchTerm: '',
        page: 0,
        isLoading: false,
        error: {},
        results: []
    }
}

export default function imagesReducer(state = initialState, action:any) : AppState {
    switch(action.type) {
        case FETCH_IMAGES_PENDING: 
            return {
                ...state,
                searchQuery: {
                    ...state.searchQuery,
                    isLoading: true
                }
            }
        case FETCH_IMAGES_SUCCESS:
            console.log('in reducer with action, ', action.images);
            return {
                ...state,
                searchQuery: {
                    ...state.searchQuery,
                    results: [...state.searchQuery.results, ...action.images]
                }
            }
        case FETCH_IMAGES_ERROR:
            return {
                ...state,
                searchQuery: {
                    ...state.searchQuery,
                    results: [...state.searchQuery.results, ...action.images],
                    error: action.error
                },
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

