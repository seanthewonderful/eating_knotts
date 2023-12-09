import React from 'react'
import Restaurant from '../components/Restaurant'
import axios from 'axios'

export default function RestaurantProfile({ restaurant }) {

  return (
    <Restaurant key={restaurant.restaurantId} restaurant={restaurant} />
  )
}

export const restaurantProfileLoader = async ({ params }) => {
    const { restaurantId } = params

    const { data } = await axios.get(`/api/restaurant/`)
}