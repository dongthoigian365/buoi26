import {
    SET_USER,
    SET_USERS
} from './../../redux/actionTypes'

const initialState = {
    user: null,
    users: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_USER:
        return {
            ...state,
            user: action.payload
        }
    case SET_USERS:
        return {
            ...state,
            users: action.payload
        }
    default:
        return state
    }
}

export default userReducer
