import classes from './Subscribe.module.css'

const Subscribe = () => {
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
          <form className={classes.inputs}>
            <input className={classes.email} placeholder='your@email.com'/>
            <button className={classes.submit}>Sign up</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Subscribe
