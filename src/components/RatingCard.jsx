import { Col, Card, Button, Form } from "react-bootstrap"
import { calculateAvgStars, notify, showStarAvg } from "../assets/funx"
import axios from "axios"
import { useEffect, useState } from "react"
import StarAvg from "./StarAvg"
import Stars from "./Stars"
import { useNavigate } from "react-router-dom"

export default function RatingCard({ rating }) {

	const [localRating, setLocalRating] = useState(rating)
	const [restaurant, setRestaurant] = useState(null)
	const [avgStars, setAvgStars] = useState(0)
	const [newStarRating, setNewStarRating] = useState(rating.stars)
	const [newRatingReview, setNewRatingReview] = useState(rating.review)

	const navigate = useNavigate()

	console.log(newStarRating)

	const getRestaurantDetails = async () => {

		const { data } = await axios.get(`/api/restaurant/id/${rating.restaurant.restaurantId}`)
		setRestaurant(data.restaurant)
		setAvgStars(calculateAvgStars(data.restaurant))
	}

	const handleEditClick = (e) => {
		e.preventDefault()

		const updateBody = {
			stars: newStarRating,
			review: newRatingReview
		}

		axios.put(`/api/rating/update/${rating.ratingId}`, updateBody)
			.then(res => {
				notify("success", "Rating updated")
				setLocalRating(res.data.rating)
			})
			.catch(error => {
				notify("danger", error.response.data.message)
			})
	}

	const handleCancelClick = (e) => {
		e.preventDefault()

		setNewStarRating(rating.stars)
		setNewRatingReview(rating.review)
	}

	useEffect(() => {
		getRestaurantDetails()
	}, [])

  return (
		<Col>
    <Card style={{ width: '10rem' }} >
			<Card.Img 
				variant="top" 
				src={rating.restaurant.img} 
				className="rating-card-img"
				/>
			<Card.Body>
				<Card.Subtitle><em>{rating.restaurant.name}</em></Card.Subtitle>
				<Card.Text>
					<StarAvg starAvg={avgStars} /> <small>({avgStars})</small>
				</Card.Text>
				<Button 
					variant="primary"
					size="sm"
					className="mb-4"
					onClick={() => navigate(`/restaurant/${restaurant.restaurantId}`)}
					>
						Visit
				</Button>
				<Card.Text>
					<Form>
						<Form.Group className="mb-2" controlId="formStars" >
							<Form.Label>You rated {rating.restaurant.name}:</Form.Label>
							<Form.Select
								onChange={(e) => setNewStarRating(e.target.value)}>
								<option value={newStarRating}><Stars stars={newStarRating} /></option>
								<option value="1">⭐️</option>
								<option value="2">⭐️⭐️</option>
								<option value="3">⭐️⭐️⭐️</option>
								<option value="4">⭐️⭐️⭐️⭐️</option>
								<option value="5">⭐️⭐️⭐️⭐️⭐️</option>
							</Form.Select>

							<Form.Label>Your review:</Form.Label>
							<Form.Control
								as="textarea"
								value={newRatingReview}
								onChange={(e) => setNewRatingReview(e.target.value)}
								/>
							
							{newStarRating !== localRating.stars || newRatingReview !== localRating.review ?
							<>
								<Button
								variant="primary"
								size="sm"
								onClick={handleEditClick}
								className="mt-3"
								>
									Save
								</Button>
								<Button
								variant="warning"
								size="sm"
								onClick={handleCancelClick}
								className="mt-3 ms-2"
								>
									Cancel
								</Button>
							</>
								:
								null
							}
						</Form.Group>
					</Form>

				</Card.Text>
			</Card.Body>
		</Card>
		</Col>
  )
}

