import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import { notify, toTitleCase } from '../assets/funx.js'
import { Button, Col, Container, Form, Row, Accordion } from 'react-bootstrap'
import { useState } from 'react'
import ProfileIcon from '../components/ProfileIcon.jsx'
import { useDispatch } from 'react-redux'

export default function Profile() {

  const { user } = useLoaderData()

  const [email, setEmail] = useState(user.email)
  const [name, setName] = useState({
    fName: user.firstName, 
    lName: user.lastName
  })
  const [selectedAvatar, setSelectedAvatar] = useState(user.img)
  const [editMode, setEditMode] = useState(false)

  const dispatch = useDispatch()

  const handleEditSave = (e) => {
    e.preventDefault()

    const editedInfo = {
      email,
      firstName: name.fName,
      lastName: name.lName,
      img: selectedAvatar,
    }

    axios.put(`/api/user/update/${user.userId}`, editedInfo)
      .then(res => {
        dispatch({
          type: "USER_AUTH",
          payload: res.data.user
        })
        notify("success", res.data.message)
      })
      .catch(error => {
        notify("error", error.response.data.message)
      })

    setEditMode(false)
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
				avatar={avatar}
				selectedAvatar={selectedAvatar}
				setSelectedAvatar={setSelectedAvatar}
				/>
		)
	})

  return (
    <Container>
      <Row className='justify-content-center'> 
        <Col>
          <h1>Welcome {toTitleCase(user.firstName)}!</h1>
          <img src={selectedAvatar} className='prof-icon-selection' />
        </Col>
        <Col>
          <h5>Nice to see you! Just a reminder, here's your info</h5>
          <li><strong>User ID:</strong> {user.userId}</li>
          <li><strong>Username:</strong> {user.username}</li>
        {editMode ? 
          <Form>
            <Form.Group className='mb-1' controlId='formEmail' >
              <Form.Label>Email address:</Form.Label>
              <Form.Control 
                type='text'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
              <Form.Label>First name:</Form.Label>
              <Form.Control 
                type='text'
                value={name.fName}
                onChange={(e) => setName({...name, fName: e.target.value})}
                />
              <Form.Label>Last name:</Form.Label>
              <Form.Control 
                type='text'
                value={name.lName}
                onChange={(e) => setName({...name, lName: e.target.value})}
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

            <Button
              variant='success'
              size='sm'
              onClick={handleEditSave}
              >
                Save
              </Button>
          </Form>
          :
          <>
            <li><strong>Email address:</strong> {email}</li>
            <li><strong>Name:</strong> {toTitleCase(name.fName)} {toTitleCase(name.lName)}</li>
            <li><strong>Password:</strong> <em>Not even we know that</em></li>

            <Button
              variant='outline-primary'
              size='sm'
              onClick={() => setEditMode(true)}
              >
                Edit your info
            </Button>
          </>
        }
        </Col>
      </Row>
    </Container>

  )
}

export const profileLoader = async ({ params }) => {
  const { userId } = params

  const { data } = await axios.get(`/api/user/id/${userId}`)

  if (data.status == 400) {
    throw Error("Error loading user profile!")
  }

  return data
}