import { IAppState, IImage, ISearchQuery } from './types';

import {FETCH_IMAGES_PENDING, FETCH_IMAGES_SUCCESS, FETCH_IMAGES_ERROR, SAVE_IMAGE, saveImage } from './actions';

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
            console.log('FIS, ', state.searchQuery.page);
            const resolvedQuery = {
                ...state.searchQuery,
                results: [...state.searchQuery.results, ...action.images],
                page: state.searchQuery.page += 1
            }
            return {
                ...state,
                searchQuery: resolvedQuery
            }
        case FETCH_IMAGES_ERROR:
            return {
                ...state,
                searchQuery: {
                    ...state.searchQuery,
                    error: action.error
                },
            }
        case SAVE_IMAGE:
            return {
                ...state,
                savedImages: [...state.savedImages, action.image]
            }
        default: 
            return state;
    }
}

