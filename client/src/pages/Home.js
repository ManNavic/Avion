import Features from '../components/features/Features'
import FooterCantainer from '../components/footer/FooterContainer'
import Header from '../components/header/HeaderContainer'
import Hero from '../components/hero/Hero'
import HeroBottom from '../components/hero/HeroBottom'
import Subscribe from '../components/subscribe/Subscribe'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features/>
      <Subscribe/>
      <HeroBottom/>
      <FooterCantainer/>
    </>
  )
}
export default Home
