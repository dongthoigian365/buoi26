import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { List } from 'antd'

const Users = () => {
  const [users, setUsers] = useState([])

  const fetchUsers = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      setUsers(response.data)
    })
  }

  useEffect(() => {
    fetchUsers()
  },[])

  return (
    <>
      <h1>User List</h1>
      <List
        bordered
        dataSource={users}
        renderItem={
          user => (
            <List.Item>
              {user.id}: {user.name}
            </List.Item>
          )
        }
    />
    </>
  )
}

export default Users
