import { useState } from "react"
import { Button, Form } from "react-bootstrap"

export default function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Form>
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
  )
}
