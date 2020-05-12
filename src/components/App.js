import React from 'react'
import { Router } from '@reach/router'
import Home from './home/Home'
import SignIn from './sign-in/SignIn'
import SignUp from './sign-up/SignUp'
import Dashboard from './dashboard/Dashboard'
import Orders from './orders/Orders'

export default function App() {
  return (
    <Router>
      <Home path="/" />
      <SignIn path="sign-in" />
      <SignUp path="sign-up" />
      <Dashboard path="dashboard" />
      <Orders path="orders" />
    </Router>
  )
}
