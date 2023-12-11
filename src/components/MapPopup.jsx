import { Container, Row, Col } from "react-bootstrap"
import { Popup } from "react-leaflet"
import { NavLink } from "react-router-dom"

export default function MapPopup({ restaurant }) {


  return (
    <Popup>

      <Container>

        <Row id="popup-card">

          <NavLink to={`/restaurant/${restaurant.restaurantId}`}>
          <Row>
            <h2>{restaurant.name}</h2>
          </Row>
          </NavLink>

          <Row>
            <h4>{restaurant.expense}</h4>
          </Row>

          <Row>
            <p>{restaurant.description}</p>
          </Row>
          
        </Row>

      </Container>

    </Popup>
  )
}
