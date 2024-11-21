import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { HeroSection } from '../../components/HeroSection/HeroSection'
import { ServicesSection } from '../../components/ServicesSection/ServicesSection'
import styles from './MainPage.module.scss'

export const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <Header />
      <HeroSection />
      <ServicesSection />
      <Footer />
    </div>
  )
}
