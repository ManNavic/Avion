import CartIcon from '../../assets/svg/Cart'
import MenuIcon from '../../assets/svg/Menu'
import ProfileIcon from '../../assets/svg/Profile'
import SearchIcon from '../../assets/svg/Search'
import classes from './HeaderTop.module.css'
import { useNavigate } from 'react-router-dom'

const HeaderTop = () => {

  const navigator = useNavigate()

  const onClick = () => {
    console.log('clicked')
    navigator('/')
  }
  return (
    <>
      <div className={classes.container}>
        <div className={`${classes.icon} ${classes.hide}`}>
          {' '}
          <SearchIcon />
        </div>
        <div className={classes.mainLogo} onClick={()=>onClick()}>Avion</div>
        <div className={`${classes.icon} ${classes.hide}`}>
          <CartIcon />
        </div>
        <div className={`${classes.icon} ${classes.hide}`}>
          <ProfileIcon />
        </div>
        <div className={`${classes.icon} ${classes.hideMobile}`}>
          <SearchIcon />
        </div>
        <div className={`${classes.icon} ${classes.hideMobile}`}>
          <MenuIcon/>
        </div>
      </div>
      <hr className={classes.divider}></hr>
    </>
  )
}
export default HeaderTop
