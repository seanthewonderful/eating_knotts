import { Container, Row, Col } from "react-bootstrap"
import { Popup } from "react-leaflet"

export default function MapPopup({ restaurant }) {


  return (
    <Popup>
      <Container>
        <Row id="popup-card">
          <Col>
            <h2>{restaurant.name}</h2>
          </Col>
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
