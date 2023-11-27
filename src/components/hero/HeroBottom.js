import classes from './HeroBottom.module.css';
import HeroImg from '../../assets/images/heroBottom.png';

const HeroBottom = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.bannerText}>
          <p className={classes.title}>
          From a studio in London to a global brand with over 400 outlets
          </p>

        </div>
        <div className={classes.bannerDescription}>
          <p>
          When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
          </p>
        </div>
          <button className={classes.button}>Get in touch</button>
      </div>
      <div className={classes.right}>
        <img src={HeroImg} alt="HeroImg" />
      </div>
    </div>
  );
};

export default HeroBottom;
