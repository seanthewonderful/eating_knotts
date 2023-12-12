import React from 'react'
import Restaurant from '../components/Restaurant'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'

export default function RestaurantProfile() {

    const { restaurant } = useLoaderData()

  return (
    <Restaurant key={restaurant.restaurantId} restaurant={restaurant} />
  )
}

export const restaurantProfileLoader = async ({ params }) => {
    const { restaurantId } = params

    const { data } = await axios.get(`/api/restaurant/id/${restaurantId}`)

    return data
}