import {
    SET_FILTER_ITEM,
    SET_FILTER_ARRAY,
    IS_FETCHING
} from '../actions/filterActions.js';

const initialState = {
    searchTerm: "",
    searchArray: "",
    isFetchingFilter: false
};

export const filter = (state = initialState, action) => {
    switch (action.type) {
        //SET FILTER ITEM
        case SET_FILTER_ITEM:
            return {
                ...state,
                searchTerm: action.payload,
                
            }
        case SET_FILTER_ARRAY:
            return {
                ...state,
                searchArray: action.payload,
                isFetchingFilter: false
            }

        case IS_FETCHING: 
            return {
                ...state, 
                isFetchingFilter: true
            }
        default:
            return state;
    }
};