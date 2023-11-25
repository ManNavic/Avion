import { useState } from 'react'
import classes from './Dashboard.module.css'
import Profile from '../profile/Profile'
import Address from '../profile/address/Address'
const Dashboard = () => {
    const [rightComponent, setRightComponent]= useState('')

    const setComponent = (value) =>{
setRightComponent(value)
    }
    const renderRightComponent = () =>{
        if(rightComponent=== 'orders'){
            return 
        }else if(rightComponent === 'address'){
            return <Address/>
        }else return <Profile/>
    }
    console.log(rightComponent)
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.menuContainer}>
          <li className={classes.menuItem} onClick={()=> setComponent('details')}>Account details</li>
          <li className={classes.menuItem} onClick={()=> setComponent('address')}>Addresses</li>
          <li className={classes.menuItem} onClick={()=> setComponent('orders')}>Orders</li>
        </div>
      </div>
      <div className={classes.right}>{renderRightComponent()}</div>
    </div>
  )
}
export default Dashboard
