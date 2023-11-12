import classes from './FooterBottom.module.css'
import LinkedinIcon from '../../assets/svg/LinkedIn'
import FacebookIcon from '../../assets/svg/Facebook'
import InstagramIcon from '../../assets/svg/Instagram'
import SkypeIcon from '../../assets/svg/Skype'
import TwitterIcon from '../../assets/svg/Twitter'
import PinterestIcon from '../../assets/svg/Pinterest'
import { useNavigate } from 'react-router-dom'
const FooterBottom = () => {
const navigate = useNavigate()
  
      return (
    <div className={classes.container}>
      <div className={classes.copyrights}>Copyright 2023 Avion LTD</div>
      <div className={classes.socials}>
        <a target='_blank' href="https://linkedin.com" className={classes.socialIcons} rel="noreferrer">
            <LinkedinIcon/>
        </a>
        <a target='_blank'href="https://fb.com" className={classes.socialIcons} rel="noreferrer">
            <FacebookIcon/>
        </a>
        <a target='_blank'href="https://instagram.com" className={classes.socialIcons} rel="noreferrer">
            <InstagramIcon/>
        </a>
        <a target='_blank'href="https://skype.com" className={classes.socialIcons} rel="noreferrer">
            <SkypeIcon/>
        </a>
        <a target='_blank'href="https://x.com" className={classes.socialIcons} rel="noreferrer">
            <TwitterIcon/>
        </a>
        <a target='_blank'href="https://pinterest.com" className={classes.socialIcons} rel="noreferrer">
            <PinterestIcon/>
        </a>
      </div>
    </div>
  )
}
export default FooterBottom
