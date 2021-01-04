import {
    SET_USER,
    SET_USERS,
    GET_COMMENTS,
    GET_POST,
    GET_INFO
} from './../../redux/actionTypes'

export const setUser = payload => {
    return {
        type:SET_USER,
        payload
    }
}

export const setUsers = payload => {
    return {
        type:SET_USERS,
        payload
    }
}

export const getComments = () => {
  return {
    type: GET_COMMENTS
  }
}

export const getPost = () => {
  return {
    type: GET_POST
  }
}


export const getInfo = payload => dispatch => {
  if ( payload === 'comments' ) {
    dispatch(getComments())
  } else {
    dispatch(getPost())
  }
}
