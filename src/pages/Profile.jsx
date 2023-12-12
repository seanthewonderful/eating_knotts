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
        <li>Name: {toTitleCase(user.firstName)} {toTitleCase(user.lastName)}</li>
      </ul>
    </div>
  )
}

export const profileLoader = async ({ params }) => {
  const { userId } = params

  const { data } = await axios.get(`/api/user/id/${userId}`)

  if (data.status == 400) {
    throw Error("Error loading user profile!")
  }

  return data
}