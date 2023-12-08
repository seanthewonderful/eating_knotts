import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import { toTitleCase } from '../assets/funx.js'

export default function Profile() {

  const { user } = useLoaderData()

  return (
    <div>
      <h1>Profile - {user.username}</h1>
      <ul>
        <li>User ID: {user.userId}</li>
        <li>Email: {user.email}</li>
        <li>Name: {user.firstName} {user.lastName}</li>
      </ul>
    </div>
  )
}

export const profileLoader = async ({ params }) => {
  const { userId } = params

  const { data } = await axios.get(`/user/id/${userId}`)

  if (data.status !== 200) {
    throw Error("Error loading user profile!")
  }

  return data
}