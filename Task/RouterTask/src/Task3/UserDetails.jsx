import React from 'react'
import {useParams} from 'react-router-dom'


const UserDetails = () => {

    const { id } = useParams();

  return (
    <div>
      <h1>User Id is -- {id}</h1>
    </div>
  )
}

export default UserDetails
