import CardIcon from '../../assets/svg/Card'
import CheckMarkIcon from '../../assets/svg/CheckMark'
import DeliverIcon from '../../assets/svg/Deliver'
import SproutIcon from '../../assets/svg/Sprout'
import classes from './Features.module.css'
const Features = () =>{
return (
    <div className={classes.container}>
        <h2 className={classes.title}>What makes our brand different</h2>
        <div className={classes.cards}>
            <div className={classes.card}>
                <DeliverIcon/>
                <h4 className={classes.cardTitle}>Next day as standard</h4>
                <p className={classes.cardText}>Order before 3pm and get your order the next day as standard</p>
            </div><div className={classes.card}>
                <CheckMarkIcon/>
                <h4 className={classes.cardTitle}>Made by true artisans</h4>
                <p className={classes.cardText}>Handmade crafted goods made with real passion and craftmanship</p>
            </div><div className={classes.card}>
                <CardIcon/>
                <h4 className={classes.cardTitle}>Unbeatable prices</h4>
                <p className={classes.cardText}>For our materials and quality you won’t find better prices anywhere</p>
            </div><div className={`${classes.card} ${classes.lastCard}`}>
                <SproutIcon/>
                <h4 className={classes.cardTitle}>Recycled packaging</h4>
                <p className={classes.cardText}>We use 100% recycled packaging to ensure our footprint is manageable</p>
            </div>
        </div>
    </div>
)
}
export default Features