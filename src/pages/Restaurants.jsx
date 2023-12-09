import axios from 'axios'
import { useLoaderData } from 'react-router-dom'

export default function AllRestaurants() {

    const { restaurants } = useLoaderData()

    console.log(restaurants)

    const allRestaurants = restaurants.map(restaurant => {
        return (
            <>
            <h4>{restaurant.name}</h4>
            <ul>
                <li>{restaurant.land.name}</li>
                <li>{restaurant.expense}</li>
            </ul>
            </>
        )
    })

  return (
    <div>
        {allRestaurants}
    </div>
  )
}

export const allRestaurantsLoader = async() => {

    const { data } = await axios.get('/restaurants/all')

    console.log(data.restaurants)

    return data
}