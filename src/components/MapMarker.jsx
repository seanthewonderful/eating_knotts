import { Marker } from "react-leaflet"
import { Icon } from "leaflet"
import MapPopup from "./MapPopup.jsx"

export default function MapMarker({ restaurant }) {
	const restaurantIcon = new Icon({
		iconUrl: `https://api.geoapify.com/v1/icon/?type=material&color=%23a404fb&icon=restaurant&noWhiteCircle&apiKey=${import.meta.env.VITE_GEOAPIFY_KEY}`,
	})

	const liquorIcon = new Icon({
		iconUrl: `https://api.geoapify.com/v1/icon/?type=material&color=%23a404fb&icon=local_bar&noWhiteCircle&apiKey=${import.meta.env.VITE_GEOAPIFY_KEY}`,
	})

  return (
    <Marker
			position={[restaurant.xCoord, restaurant.yCoord]}
			icon={restaurant.name === "Cantina Del Sur" || restaurant.name === "Calico Saloon" ? liquorIcon : restaurantIcon}
			title={restaurant.name}
			>
			
			<MapPopup restaurant={restaurant} />

	</Marker>
  )
}
