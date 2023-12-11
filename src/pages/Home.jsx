import React from 'react'
import Map from '../components/Map.jsx'
import { useLoaderData } from 'react-router-dom'

export default function Home() {

  const { restaurants } = useLoaderData()

  return (
    <div>
      {<Map allRestaurants={restaurants}/>}
    </div>
  )
}
