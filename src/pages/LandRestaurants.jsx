import axios from "axios"
import { useLoaderData } from 'react-router-dom'

export default function LandRestaurants() {

    const { landWithRestaurants } = useLoaderData()

    console.log(landWithRestaurants)

    const allRestaurants = landWithRestaurants.restaurants.map(restaurant => {
        return (
            <>
            <h5>{restaurant.name}</h5>
            <ul>
                <li>{restaurant.expense}</li>
            </ul>
            </>
        )
    })

  return (
    <div>
        <h2>Restaurants of {landWithRestaurants.name}</h2>
        {allRestaurants}
    </div>
  )
}

export const landRestaurantLoader = async ({ params }) => {

    const { landId } = params
    const { data } = await axios.get(`/api/restaurants/land/${landId}`)

    return data
}