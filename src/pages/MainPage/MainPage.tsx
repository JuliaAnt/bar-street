import { Header } from '../../components/Header/Header'
import { HeroSection } from '../../components/HeroSection/HeroSection'
import styles from './MainPage.module.scss'

export const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <Header />
      <HeroSection />
    </div>
  )
}
