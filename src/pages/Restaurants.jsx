import axios from 'axios'
import { useLoaderData, NavLink } from 'react-router-dom'


export default function AllRestaurants() {

    const { restaurants } = useLoaderData()

    const allRestaurants = restaurants.map(restaurant => {
        return (
            <>
            <h4>{restaurant.name}</h4>
            <ul>
                <li><NavLink to={`restaurants/land/${restaurant.land.landId}`}>{restaurant.land.name}</NavLink></li>
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

    return data
}