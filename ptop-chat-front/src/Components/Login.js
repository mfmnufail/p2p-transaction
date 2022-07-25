import React,{useState} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'

const Login = () => {

    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();

          localStorage.setItem('token', "login success");
    
        const user = {
            username: username,
            password:password
    
        };
    
        console.log("Login details" + JSON.stringify(user))
    
        axios.post("https://localhost:4000/login", user).then((res) => {
        });
      };

  return (
    <Form onSubmit={handleSubmit} >
    <Form.Field>
      <label>Username</label>
      <input name="name" placeholder='User Name' onChange={(e)=>setUsername(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input name="password" type="password" name="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
  )
}

export default Login