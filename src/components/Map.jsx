import { Icon, Point } from "leaflet"
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from "react-leaflet"
import { Container, Row, Col } from "react-bootstrap"

export default function Map({ allRestaurants }) {

    const restaurantIcon = new Icon({
        iconUrl: `https://api.geoapify.com/v1/icon/?type=material&color=%23a404fb&icon=restaurant&noWhiteCircle&apiKey=${import.meta.env.VITE_GEOAPIFY_KEY}`,
    })

    const liquorIcon = new Icon({
        iconUrl: `https://api.geoapify.com/v1/icon/?type=material&color=%23a404fb&icon=local_bar&noWhiteCircle&apiKey=${import.meta.env.VITE_GEOAPIFY_KEY}`,
        // iconSize: [32, 46]
    })
    
    const markers = allRestaurants.map((rest) => {
        return {
            geocode: [rest.xCoord, rest.yCoord],
            // popUp: `<h5>${rest.name}</h5><ul><li>${rest.expense}</li><li>${rest.description}</li></ul>`
            name: rest.name,
            icon: rest.name === 'Cantina Del Sur' || rest.name === 'Calico Saloon' ? liquorIcon : restaurantIcon,
            expense: rest.expense,
            description: rest.description
        }
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
            {markers.map((marker) => {
                return (
                <Marker
                    position={marker.geocode}
                    icon={marker.icon}
                    title={marker.name}
                    >

                    <Popup 
                        >
                        <Container >
                            <Row id="popup-card">
                                <Col>
                                    <h1>{marker.name}</h1>
                                </Col>
                            </Row>
                            <Row>
                                <p>{marker.expense}</p>
                            </Row>
                            <Row>
                                <p>{marker.description}</p>

                            </Row>
                        </Container>
                    </Popup>
                </Marker>
                )
            })}
        </MapContainer> 
  )
}
