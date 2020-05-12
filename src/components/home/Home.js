import React from 'react'
import { Link } from '@reach/router'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <Link to="/sign-in">SignIn</Link>
      </div>
      <div>
        <Link to="sign-up">SignUp</Link>
      </div>
      <div>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  )
}

export default Home
