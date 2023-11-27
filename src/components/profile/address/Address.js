import { useEffect, useState } from 'react'
import classes from './Address.module.css'
const Address = () => {
  const [user, setUser] = useState({})

  const token = localStorage.getItem('token')
  console.log("user",user.profile)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (token) {
          const response = await fetch(
            'https://long-jade-squirrel-wear.cyclic.app/user',
            {
              method: 'GET',
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          )

          if (response.ok) {
            const userData = await response.json()
            setUser(userData)
          } else {
            console.error('Failed to fetch user data')
          }
        }
      } catch (error) {
        console.error('An error occurred while fetching user data:', error)
      }
    }

    fetchUser()
  }, [])
  return (
    <div className={classes.container}>
      <div className={classes.shipping}>
        <div>
           <h2 className={classes.title}>Shipping address</h2>
        <p className={classes.addressLine}>River Drive 1418</p>
        <p className={classes.addressLine}>Cottonhall </p>
        <p className={classes.addressLine}>CA 9622</p>
        <p className={classes.addressLine}>United States</p>
        </div>
       <div className={classes.edit}><p>Edit</p></div>
      </div>
      <div className={classes.billing}>
      <div>
           <h2 className={classes.title}>Shipping address</h2>
        <p className={classes.addressLine}>River Drive 1418</p>
        <p className={classes.addressLine}>Cottonhall </p>
        <p className={classes.addressLine}>CA 9622</p>
        <p className={classes.addressLine}>United States</p>
        </div>
       <div className={classes.edit}><p>Edit</p></div>
      </div>
    </div>
  )
}
export default Address
