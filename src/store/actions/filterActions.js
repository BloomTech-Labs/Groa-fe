import axiosWithAuth from "../../utils/axiosWithAuth.js";
export const SET_FILTER_ITEM = "SET_FILTER_ITEM";
export const SET_FILTER_ARRAY = "SET_FILTER_ARRAY";

export const setFilter  = (item) => { 
     return {type: SET_FILTER_ITEM, payload: item}
}
export const setFilterArray = (item) => {
     return dispatch => {
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