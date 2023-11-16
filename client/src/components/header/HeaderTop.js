import CartIcon from '../../assets/svg/Cart'
import MenuIcon from '../../assets/svg/Menu'
import ProfileIcon from '../../assets/svg/Profile'
import SearchIcon from '../../assets/svg/Search'
import classes from './HeaderTop.module.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Menu from '../login/Menu'

const HeaderTop = () => {
  const token = localStorage.getItem('token')
  const navigator = useNavigate()
  const [openMenuModal, setOpenMenuModal] = useState(false)

  const handleMenu = () => {
    console.log('clicked')
    navigator('/register')
  }

  const onClick = () => {
    console.log('clicked')
    navigator('/')
  }
  const loggedIn = () => {
    console.log('clicked')
    setOpenMenuModal(true)
    console.log(openMenuModal)
    if (!openMenuModal) {
      setOpenMenuModal(true)
    } else setOpenMenuModal(false)
  }
  return (
    <>
      <div className={classes.container}>
        <div className={`${classes.icon} ${classes.hide}`}>
          {' '}
          <SearchIcon />
        </div>
        <div className={classes.mainLogo} onClick={() => onClick()}>
          Avion
        </div>
        <div className={`${classes.icon} ${classes.hide}`}>
          <CartIcon />
        </div>
        {token ? (
          <div className={`${classes.icon} ${classes.hide}`} onClick={loggedIn}>
            <ProfileIcon />
          </div>
        ) : (
          <div
            className={`${classes.icon} ${classes.hide}`}
            onClick={handleMenu}
          >
            <ProfileIcon />
          </div>
        )}
        <div className={`${classes.icon} ${classes.hideMobile}`}>
          <SearchIcon />
        </div>
        <div className={`${classes.icon} ${classes.hideMobile}`}>
          <MenuIcon />
        </div>
        {openMenuModal && token && <Menu closeLogin={setOpenMenuModal} />}
      </div>
      <hr className={classes.divider}></hr>
    </>
  )
}
export default HeaderTop
