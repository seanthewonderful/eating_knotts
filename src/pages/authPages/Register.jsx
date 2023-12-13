import { useState } from "react"
import { Container, Row, Col, Form, Stack, Button, Accordion } from "react-bootstrap"
import axios from "axios"
import ProfileIcon from "../../components/ProfileIcon.jsx"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { notify } from "../../assets/funx.js"

export default function Register({ handleRegister }) {

	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [email, setEmail] = useState("")
	const [name, setName] = useState({ fName: "", lName: ""})
	const [selectedAvatar, setSelectedAvatar] = useState(0)
	const [badSubmit, setBadSubmit] = useState(false)

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleRegistration = (e) => {
		e.preventDefault()

		const registrationBody = {
			username,
			password, 
			email,
			name,
			img: selectedAvatar,
		}

		axios.post('/api/user/create', registrationBody)
			.then(res => {
				dispatch({
					type: "USER_AUTH",
					payload: res.data.userId
				})
				navigate('/')
				notify("success", res.data.message)
			})
			.catch(error => {
				notify("error", error.response.data.message)
			})
	}

	const avatars = [
		{imgSrc: "/public/proficons/default.png", id: 1},
		{imgSrc: "/public/proficons/charlie.png", id: 2},
		{imgSrc: "/public/proficons/linus.gif", id: 3},
		{imgSrc: "/public/proficons/lucy.png", id: 4},
		{imgSrc: "/public/proficons/marcie.png", id: 5},
		{imgSrc: "/public/proficons/patty.png", id: 6},
		{imgSrc: "/public/proficons/franklin.png", id: 7},
		{imgSrc: "/public/proficons/pigpen.png", id: 8},
		{imgSrc: "/public/proficons/rerun.webp", id: 9},
		{imgSrc: "/public/proficons/sally.png", id: 10},
		{imgSrc: "/public/proficons/schroeder.png", id: 11},
		{imgSrc: "/public/proficons/snoopy.png", id: 12},
		{imgSrc: "/public/proficons/olaf.webp", id: 13},
		{imgSrc: "/public/proficons/belle.jpeg", id: 14},
		{imgSrc: "/public/proficons/spike.webp", id: 15},
		{imgSrc: "/public/proficons/woodstock.png", id: 16},
	]
	const avatarOptions = avatars.map(avatar => {
		return (
			<ProfileIcon
				key={avatar.id}
				avatar={avatar}
				selectedAvatar={selectedAvatar}
				setSelectedAvatar={setSelectedAvatar}
				/>
		)
	})

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col 
          id="register-form" 
          xs={12} sm={10} md={9} lg={7} xl={6} xxl={5}
          >
          <Form onSubmit={handleRegistration}>
            <Form.Group className="my-3" controlId="formUsername" >
              <Form.Label>Username</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter username" 
                onChange={(e) => setUsername(e.target.value)}
					 required
                />
            </Form.Group>

				<Form.Group className="mb-3" controlId="formEmail" >
					<Form.Label>Email Address</Form.Label>
					<Form.Control 
						type="email"
						placeholder="Enter email"
						onChange={(e) => setEmail(e.target.value)}
						required
						/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formFName" >
					<Form.Label>First name</Form.Label>
					<Form.Control 
						type="text"
						placeholder="Enter first name"
						onChange={(e) => setName({...name, fName: e.target.value})}
						/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formLName" >
					<Form.Label>Last name</Form.Label>
					<Form.Control 
						type="text"
						placeholder="Enter last name"
						onChange={(e) => setName({...name, lName: e.target.value})}
						/>
				</Form.Group>

            <Form.Group className="mb-4" controlId="formPassword" >
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Enter password" 
                onChange={(e) => setPassword(e.target.value)}
					 required
                />
            </Form.Group>

				<Accordion>
					<Accordion.Item eventKey="0">
						<Accordion.Header>Select an avatar</Accordion.Header>
						<Accordion.Body>
							{avatarOptions}
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>

            <Row className="justify-content-between my-3">
              <Col>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>

              <Col>
                <Stack 
                  direction="horizontal" 
                  className="align-items-baseline justify-content-end"
                  >
                  <h6>Already registered?</h6>
                  <Button 
                    variant="secondary"
                    className="ms-2"
                    onClick={handleRegister}
                    >
                    Login
                  </Button>

                </Stack>
              </Col>
            </Row>

          </Form>
        </Col>
      </Row>

    </Container>
  )
}
