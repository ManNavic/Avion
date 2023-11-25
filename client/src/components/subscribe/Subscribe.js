import classes from './Subscribe.module.css'
import { useState } from 'react'
const Subscribe = () => {
  const [formData, setFormData] = useState({
    email: ''
  })
  const [error, setError] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(
        'https://long-jade-squirrel-wear.cyclic.app/subscriber',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        }
      )
      if (response.ok) {
        console.log('You have subscribed successfully')
        setFormData({
          email: ''
        })
      } else {
        const responseData = await response.json()

        console.log('errordata', responseData.errors)
        setError(responseData.errors)
      }
    } catch (error) {
      console.error('Subscription failed:', error)
    }
  }
  const handleInput = (e) => {
    const { name, value } = e.target
    setFormData((prevUser) => ({
      ...prevUser,
      [name]: value
    }))
  }
  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <div className={classes.formContainer}>
          <h3 className={classes.formTitle}>
            Join the club and get the benefits
          </h3>
          <p className={classes.formText}>
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores and more
          </p>
          <form className={classes.inputs} onSubmit={handleSubmit}>
            <input
              className={classes.email}
              placeholder="your@email.com"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInput}
            />
            <button className={classes.submit}>Sign up</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Subscribe
