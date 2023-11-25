import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import classes from './Menu.module.css'
import ProfileIcon from '../../assets/svg/Profile2'
import SettingsIcon from '../../assets/svg/Settings'
import HelpIcon from '../../assets/svg/Help'
import LogoutIcon from '../../assets/svg/Logout'
const Menu = ({ closeLogin }) => {
  const [user, setUser] = useState()

  const token = localStorage.getItem('token')
  console.log(token)
  const navigate = useNavigate()
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

          console.log('Response status:', response.status)

          if (response.ok) {
            const userData = await response.json()
            console.log('User data:', userData)
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
  const handleLogout=()=>{
    localStorage.removeItem('token')
    navigate('/')
  }
  return (
    <>
      <div className={classes.container}>
        <div className={classes.userContainer}>
          {!user ? (
            <div className={classes.loader}></div>
          ) : (
            <>
              <div className={classes.iniatials}>
                {user && user.profile.length > 0
                  ? user.profile[0].firstName[0] + user.profile[0].lastName[0]
                  : ''}
              </div>
              <p className={classes.userName}>
                {user.profile[0].firstName + ' ' + user.profile[0].lastName}
              </p>
            </>
          )}

          <hr />
        </div>
        <div className={classes.menuContainer}>
          <div className={classes.itemContainer} onClick={()=> navigate('/profile')}>
            <div className={classes.iconContainer}>
              <ProfileIcon />
            </div>
            Edit Profile
          </div>
          <div className={classes.itemContainer}>
            <div className={classes.iconContainer}>
              <SettingsIcon />
            </div>
            Settings & Privacy
          </div>
          <div className={classes.itemContainer}>
            <div className={classes.iconContainer}>
              <HelpIcon />
            </div>
            Help & Support
          </div>
          <div className={classes.itemContainer} onClick={handleLogout} >
            <div className={classes.iconContainer}>
              <LogoutIcon />
            </div>
            Logout
          </div>
        </div>
      </div>
    </>
  )
}
export default Menu
