import constants from '../constants'

const initialState = {
    isPostingUser: false, 
    isPostingUserError: null, 

}

export const dsUserReducer = (state=initialState, {type, payload}) => { 
    switch(type) {
        case constants.Post_USER:
            return {
                ...state, 
                isPostingUser: true
            }
        default:
            return state
    }
}

