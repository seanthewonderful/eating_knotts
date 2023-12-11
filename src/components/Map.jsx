import { MapContainer, TileLayer } from "react-leaflet"
import MapMarker from "./MapMarker.jsx"

export default function Map({ allRestaurants }) {
    
	const markers = allRestaurants.map((rest) => {
		return <MapMarker key={rest.restaurantId} restaurant={rest} />
	})

  return (
		<MapContainer 
			center={[33.84440287913099, -118.00018674505877]} 
			zoom={17} 
			minZoom={16}
			maxZoom={20}
			scrollWheelZoom={true}
			zoomControl={false}
			>

			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				maxZoom={22}
				/>

			{markers}
		</MapContainer> 
  )
}
