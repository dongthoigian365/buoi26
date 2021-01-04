import axios from 'axios'

export const fetchUser = id => {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
}
