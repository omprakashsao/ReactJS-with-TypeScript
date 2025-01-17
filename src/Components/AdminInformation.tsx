import React, { FC } from 'react'
import { AdminDetails } from '../type'

type AdminProp = {
  admin: AdminDetails,
}

const AdminInformation:FC<AdminProp> = ({admin}) => {
  return (
    <div>
        <h1>Admin Information</h1>
        <h3>{admin.id}</h3>
        <h3>{admin.name}</h3>
        <h3>{admin.email}</h3>
        <h3>{admin.role}</h3>
        <h3>{admin.password}</h3>
    </div>
  )
}

export default AdminInformation