import classes from './FooterTop.module.css'
import { useState } from 'react'
const FooterTop = () => {
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
    <>
      <div className={classes.container}>
        <div className={classes.menuContainer}>
          <div className={classes.menu}>
            <p className={classes.menuTitle}>Menu</p>
            <li className={classes.listItem}>New arrivals</li>
            <li className={classes.listItem}>Best Sellers</li>
            <li className={classes.listItem}>Recently viewed</li>
            <li className={classes.listItem}>Popular this week</li>
            <li className={classes.listItem}>All Products</li>
          </div>
          <div className={classes.categories}>
            <p className={classes.menuTitle}>Categories</p>
            <li className={classes.listItem}>Crockery</li>
            <li className={classes.listItem}>Furniture</li>
            <li className={classes.listItem}>Houseware</li>
            <li className={classes.listItem}>Plant Products</li>
            <li className={classes.listItem}>Chairs</li>
          </div>
          <div className={classes.about}>
            <p className={classes.menuTitle}>Our company</p>
            <li className={classes.listItem}>About us</li>
            <li className={classes.listItem}>Vacancies</li>
            <li className={classes.listItem}>Contact us</li>
            <li className={classes.listItem}>Privacy</li>
            <li className={classes.listItem}>Return policy</li>
          </div>
        </div>

        <div className={classes.form}>
          <p className={classes.formTitle}>Join our mailing list</p>
          <div className={classes.formContainer}>
            <form onSubmit={handleSubmit}>
              <input
                placeholder="your@email.com"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInput}
                className={classes.email}
              />
              <button className={classes.submit}>Sign up</button>
            </form>
          </div>
        </div>
      </div>
      <div className={classes.dividerContainer}>
        <div className={classes.divider}></div>
      </div>
    </>
  )
}
export default FooterTop
