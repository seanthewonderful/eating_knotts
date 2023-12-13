import axios from "axios"
import { useState } from "react"

import { Button, Container, Form, Row, Col, Stack } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useNavigate, NavLink } from "react-router-dom"

import { notify } from "../../assets/funx.js"
import Register from "./Register.jsx"

export default function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [checked, setChecked] = useState(false)
  const [register, setRegister] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    const bodyObj = {
      username: username.toLowerCase(),
      password
    }

    if (checked) {
      axios.post('/api/login/admin', bodyObj)
        .then(res => {
          dispatch({
            type: 'ADMIN_AUTH',
            payload: res.data.adminId,
          })
          navigate('/')
          notify("success", res.data.message)
        })
        .catch(error => {
          notify("error", error.response.data.message)
        })

    } else {
      axios.post('/api/login', bodyObj)
        .then(res => {
          dispatch({
            type: 'USER_AUTH',
            payload: res.data.user
          })
          navigate('/')
          notify("success", res.data.message)
        })
        .catch(error => {
          notify("error", error.response.data.message)
        })

    }

  }

  const handleCheck = () => setChecked(!checked)
  const handleRegister = () => setRegister(!register)

  return register ? (
    <Register handleRegister={handleRegister}/>
  ) 
  : (
    <Container fluid>

      <Row className="justify-content-center">
        <Col 
          id="login-form" 
          xs={12} sm={10} md={9} lg={7} xl={6} xxl={5}
          >
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formUsername" >
              <Form.Label>Username</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter username" 
                onChange={(e) => setUsername(e.target.value)}
                required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword" >
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Enter password" 
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </Form.Group>

            <Row className="justify-content-between">
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
                  <h6>Need to Register?</h6>
                  <Button 
                    variant="secondary"
                    className="ms-2"
                    onClick={handleRegister}
                    >
                    Register
                  </Button>

                </Stack>
              </Col>
            </Row>

            <Form.Group className="mt-3" controlId="formCheckbox" >
              <Form.Check 
                type="checkbox" 
                label="Admin"
                checked={checked} 
                onChange={handleCheck}
                />
            </Form.Group>
          </Form>
        </Col>
      </Row>

    </Container>
  )
}
