import axiosWithAuth from "../../utils/axiosWithAuth.js";
export const SET_FILTER_ITEM = "SET_FILTER_ITEM";

export const setFilter = (item) => {
     return dispatch => {
          axiosWithAuth().get(`/movies`, {search: item})
          .then(res => { 
               console.log(res)
               dispatch({type: SET_FILTER_ITEM, payload: res})
          })
          .catch(err => {
               console.log("Error", err); 
          })
     }
     
}