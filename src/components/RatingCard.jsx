import { Container, Row, Col, Card } from "react-bootstrap"
import { calculateAvgStars, showStarAvg } from "../assets/funx"
import axios from "axios"
import { useEffect, useState } from "react"
import StarAvg from "./StarAvg"

export default function RatingCard({ rating }) {

	const [restaurant, setRestaurant] = useState(null)
	const [avgStars, setAvgStars] = useState(0)

	const getRestaurantDetails = async () => {

		const { data } = await axios.get(`/api/restaurant/id/${rating.restaurant.restaurantId}`)
		setRestaurant(data.restaurant)
		setAvgStars(calculateAvgStars(data.restaurant))
	}

	useEffect(() => {
		getRestaurantDetails()
	}, [])

  return (
    <Card style={{ width: '18rem' }} >
			<Card.Img variant="top" src={rating.restaurant.img} />
			<Card.Body>
				<Card.Title>{rating.restaurant.name}</Card.Title>
				<Card.Text>
					<StarAvg starAvg={avgStars} /> <small>({avgStars})</small>
				</Card.Text>
				<Card.Subtitle>You rated {rating.restaurant.name}:</Card.Subtitle>
			</Card.Body>
		</Card>
  )
}

