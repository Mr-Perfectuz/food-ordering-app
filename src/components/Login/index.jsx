
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Wrapper, Form, Input } from './style'

export const Login = () => {

  const navigate = useNavigate()

  const emailRef = useRef()
  const passwordRef = useRef()

  const Login = (e) => {
    e.preventDefault()
    const user = JSON.parse(localStorage.getItem('user'));
    if (user.email === emailRef.current.value && user.password === passwordRef.current.value) {
      const number = parseInt(Math.random() * 1000000000000000000)
      localStorage.setItem("tokenFood", JSON.stringify(number.toString(16)))

    }


  }


  return (
    <Container>
      <Wrapper>
        <Form>
          <Input type='email' ref={emailRef} placeholder='Email' />
          <Input type='password' ref={passwordRef} placeholder='Password' />
          <button type='submit' onClick={Login}>Login</button>
          <span onClick={() => navigate('/register')}>Don't have an account ? Create an account</span>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
