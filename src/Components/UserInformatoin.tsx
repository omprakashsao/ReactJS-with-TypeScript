import React from 'react'
import { UserDetails } from '../type'

type UserProp = {
  user: UserDetails,
}

const UserInformation = ({user} : UserProp) => {
  return (
    <div>
      <h1>User-Information</h1>
      <h3>{user.id}</h3>
      <h3>{user.name}</h3>
      <h3>{user.email}</h3>


    </div>
  )
}

export default UserInformation