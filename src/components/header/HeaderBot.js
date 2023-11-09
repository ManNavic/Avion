import classes from './HeaderBot.module.css'
const HeaderBot = () =>{
    return (
        <div className={classes.container}>
            <div className={classes.productCategoty}>Plant pots</div>
            <div className={classes.productCategoty}>Ceramics</div>
            <div className={classes.productCategoty}>Tables</div>
            <div className={classes.productCategoty}>Chairs</div>
            <div className={classes.productCategoty}> Crockery</div>
            <div className={classes.productCategoty}>Tableware</div>
            <div className={classes.productCategoty}>Cutlery</div>
        </div>
    )
}
export default HeaderBot