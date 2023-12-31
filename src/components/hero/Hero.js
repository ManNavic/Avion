import classes from './Hero.module.css';
import HeroImg from '../../assets/images/heroImg.png';
import { useNavigate } from 'react-router-dom';
const Hero = () => {
  const navigate = useNavigate()
  const handleClick=(category)=>{
      navigate(`/collections?category=${category}`);
      window.scrollTo(0, 0)
  }
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.bannerText}>
          <p className={classes.title}>
            The furniture brand for the future, with timeless designs
          </p>
          <p className={classes.bannerDescriptionMobile}>
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors, and a beautiful way
            to display things digitally using modern web technologies.
          </p>
          <button className={classes.button} onClick={()=> handleClick('Furniture')}>View collection</button>
        </div>
        <div className={classes.bannerDescription}>
          <p>
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors, and a beautiful way
            to display things digitally using modern web technologies.
          </p>
        </div>
      </div>
      <div className={classes.right}>
        <img src={HeroImg} alt="HeroImg" />
      </div>
    </div>
  );
};

export default Hero;
