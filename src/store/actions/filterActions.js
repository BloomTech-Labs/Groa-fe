import axios from 'axios'; 
export const SET_FILTER_ITEM = "SET_FILTER_ITEM";

export const setFilter = (item) => {
     return dispatch => {
          axios.get(`https://groaberecommendations-env.eba-jm9gzcte.us-east-1.elasticbeanstalk.com/api/users/movies`, {search: item})
          .then(res => { 
               console.log(res)
               // dispatch({type: SET_FILTER_ITEM, payload: item})
          })
          .catch(err => {
               console.log("Error", err); 
          })
     }
     
}