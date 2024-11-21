import { CocktailList } from '../CocktailList/CocktailList'
import styles from './ServicesSection.module.scss'

export const ServicesSection = () => {
  return (
    <section className={styles.servicesSection}>
      <CocktailList />
    </section>
  )
}
