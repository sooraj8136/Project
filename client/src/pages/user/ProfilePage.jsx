import React from 'react'
import { useFetch } from '../../hooks/useFetch'

function ProfilePage() {

    const [profiledata, error] = useFetch('/user/profile')

  return (
    <div>ProfilePage</div>
  )
}

export default ProfilePage