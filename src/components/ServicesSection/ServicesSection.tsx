import { CocktailList } from '../CocktailList/CocktailList'
import { Gallery } from '../Gallery/Gallery'
import styles from './ServicesSection.module.scss'

export const ServicesSection = () => {
  return (
    <section className={styles.servicesSection}>
      <CocktailList />
      <Gallery />
    </section>
  )
}
