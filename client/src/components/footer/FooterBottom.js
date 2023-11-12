import classes from './FooterBottom.module.css'
import LinkedinIcon from '../../assets/svg/LinkedIn'
import FacebookIcon from '../../assets/svg/Facebook'
import InstagramIcon from '../../assets/svg/Instagram'
import SkypeIcon from '../../assets/svg/Skype'
import TwitterIcon from '../../assets/svg/Twitter'
import PinterestIcon from '../../assets/svg/Pinterest'
const FooterBottom = () => {
  
      return (
    <div className={classes.container}>
      <div className={classes.copyrights}>Copyright 2023 Avion LTD</div>
      <div className={classes.socials}>
        <div className={classes.socialIcons}>
            <LinkedinIcon/>
        </div>
        <div className={classes.socialIcons}>
            <FacebookIcon/>
        </div>
        <div className={classes.socialIcons}>
            <InstagramIcon/>
        </div>
        <div className={classes.socialIcons}>
            <SkypeIcon/>
        </div>
        <div className={classes.socialIcons}>
            <TwitterIcon/>
        </div>
        <div className={classes.socialIcons}>
            <PinterestIcon/>
        </div>
      </div>
    </div>
  )
}
export default FooterBottom
