import {
    ADDING_RATING_START,
    ADDING_RATING_SUCCESS,
    ADDING_RATING_FAIL
  } from "../actions/ratingAction";

  
  const initialState = {
    isAdding: false,
    error: "",
    response: null
  };
  
  export const rating = (state = initialState, action) => {
    switch (action.type) {
      case  ADDING_RATING_START:
        return {
          ...state,
          isAdding: true
        }
      //ADD RATING SUCCESS
      case  ADDING_RATING_SUCCESS:
        return {
          ...state,
          isAdding: false,
          response: action.payload
        };
  
      //ADD RATING FAIL
      case  ADDING_RATING_FAIL:
        return {
          ...state,
          isAdding: false,
          error: action.payload
        };
  
      default:
        return state;
    }
  };
  