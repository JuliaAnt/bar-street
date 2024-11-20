import styles from './HeroSection.module.scss'
import orangeCocktail from '../../assets/images/orange-cocktail.svg'
import greenCocktail from '../../assets/images/green-cocktail.svg'
import titleBackground from '../../assets/images/main-title.svg'

export const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <img src={orangeCocktail} alt='Cocktail' className={styles.orangeCocktail} />
        <div className={styles.text}>
          <h1>
            Мобильный <br />
            выездной бар
          </h1>
          <img src={titleBackground} alt='Title background' className={styles.titleBackground} />
        </div>

        <p>
          Сделаем бар с любыми профессиональными <br />
          коктейлями на ваше мероприятие.
        </p>
        <button className={styles.ctaButton}>Оставить заявку</button>
        <img src={greenCocktail} alt='Cocktail' className={styles.greenCocktail} />
      </div>
    </section>
  )
}
