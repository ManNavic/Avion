import classes from './Address.module.css'
const Address = () => {
  return (
    <div className={classes.container}>
      <p className={classes.addressLine}>
       River Drive 1418 
      </p>
      <p>
       Cottonhall </p>
       <p>
       CA 9622
       </p>
       <p>United States</p>
    </div>
  )
}
export default Address
