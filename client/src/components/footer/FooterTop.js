import classes from './FooterTop.module.css'
const FooterTop = () => {
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
            <input placeholder="your@email.com" className={classes.email} />
            <button className={classes.submit}>Sign up</button>
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
