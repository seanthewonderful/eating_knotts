import axios from "axios"
import { useState } from "react"

import { Button, Container, Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { toast } from 'react-toastify'
import { notify } from "../../assets/funx.js"

export default function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    const bodyObj = {
      username: username.toLowerCase(),
      password
    }

    axios.post('/api/login', bodyObj)
      .then(res => {
        dispatch({
          type: 'USER_AUTH',
          payload: res.data.userId
        })
        navigate('/')
        notify("success", res.data.message)
      })
      .catch(error => {
        notify("error", error.response.data.message)
      })
      
  }

  return (
    <Container id="login-form">

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formUsername" >
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter username" 
            onChange={(e) => setUsername(e.target.value)}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword" >
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Enter password" 
            onChange={(e) => setPassword(e.target.value)}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCheckbox" >
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    </Container>
  )
}
