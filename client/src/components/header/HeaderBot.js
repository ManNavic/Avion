import classes from './HeaderBot.module.css'
import { useNavigate } from 'react-router-dom';
const HeaderBot = () =>{
    const navigate = useNavigate()
    const handleClick=(category)=>{
        navigate(`/collections?category=${category}`);
        window.scrollTo(0, 0)
    }
    return (
        <div className={classes.container}>
            <div className={classes.productCategoty} onClick={()=> handleClick('All')}> All Products</div>
            <div className={classes.productCategoty} onClick={()=> handleClick('Pot')}>Plant pots</div>
            <div className={classes.productCategoty} onClick={()=> handleClick('Ceramic')}>Ceramics</div>
            <div className={classes.productCategoty} onClick={()=> handleClick('Table')}>Tables</div>
            <div className={classes.productCategoty} onClick={()=> handleClick('Chair')}>Chairs</div>
            <div className={classes.productCategoty} onClick={()=> handleClick('Tableware')}>Tableware</div>
            <div className={classes.productCategoty} onClick={()=> handleClick('Cutlery')}>Cutlery</div>
        </div>
    )
}
export default HeaderBot