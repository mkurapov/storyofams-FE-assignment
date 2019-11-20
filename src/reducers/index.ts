import { IAppState, IImage, ISearchQuery } from '../types';

import {FETCH_IMAGES_PENDING, FETCH_IMAGES_SUCCESS, FETCH_IMAGES_ERROR, TOGGLE_SAVED_IMAGE } from '../actions';

const initialState:IAppState = {
    savedImages: [],
    searchQuery: {
        searchTerm: '',
        page: 0,
        isLoading: false,
        error: {},
        results: []
    }
}

export default function imagesReducer(state = initialState, action:any) : IAppState {
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
            return {
                ...state,
                searchQuery: action.query
            }
        case FETCH_IMAGES_ERROR:
            return {
                ...state,
                searchQuery: {
                    ...state.searchQuery,
                    error: action.error
                },
            }
        case TOGGLE_SAVED_IMAGE:
            console.log(state.savedImages);
            const isImageSaved = state.savedImages.some(img => img.id === action.image.id);
            return {
                ...state,
                savedImages: isImageSaved ? 
                    state.savedImages.filter(img => img.id !== action.image.id) : [...state.savedImages, action.image]
            }
        default: 
            return state;
    }
}

