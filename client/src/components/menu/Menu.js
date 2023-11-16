import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import classes from './Menu.module.css'
const Menu = ({ closeLogin }) => {
  const token = localStorage.getItem('token')
  console.log(token)
  const navigate = useNavigate()
  return (
    <>
      <div className={classes.container}>
         <a>Login</a>
         <p>Signup</p>
      </div>
    </>
  )
}
export default Menu
