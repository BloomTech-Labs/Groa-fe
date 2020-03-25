import axiosWithAuth from "../../utils/axiosWithAuth.js";
export const SET_FILTER_ITEM = "SET_FILTER_ITEM";
export const SET_FILTER_ARRAY = "SET_FILTER_ARRAY";
export const IS_FETCHING  = "IS_FETCHING"; 
//set Filter turns into searchTerm later, to filter the recommendations results that come back
// using search bar..
export const setFilter  = (item) => { 
     return {type: SET_FILTER_ITEM, payload: item}
}
//set filter array makes a call to /movies to so that backend can filter the movies based off
//year genra and title. It starts by filter movies as you type with length greater or equal to 
// four. but if you have a movie that is length less than that, when you push enter it will 
// make submit equal to true so that it will still get filtered on the backend.

// We also wanted to add a feature to the search bar where drop down happens as you type with
// top results that might be related to your search. But do to limited time, and lack of knowledge
// on catching we never implemented that.
export const setFilterArray = (item) => {
     return dispatch => {
          dispatch({type: IS_FETCHING})
          const {search, year, submit, genres} = item; 
          axiosWithAuth().post(`/movies`, {search: search, submit: submit, genres: genres, year: year})
          .then(res => { 
               console.log(res)
               dispatch({type: SET_FILTER_ARRAY, payload: res.data})
          })
          .catch(err => {
               console.log("Error", err); 
          })
     }
     
}