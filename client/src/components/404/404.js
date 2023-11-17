import classes from './404.module.css'
const NotFound = () => {
    return(
        <div className={classes.container}>
<p className={classes.number}>404</p>
<p className={classes.text}>Page not found</p>
        </div>
    )
}
export default NotFound