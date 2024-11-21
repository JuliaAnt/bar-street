import styles from './CostCalculation.module.scss'

export const CostCalculation = () => {
  return (
    <div className={styles.costCalculationWrapper}>
      <div className={styles.backgroundColor}>
        <div className={styles.backgroundImage}>
          <h2 className={styles.subTitle}>Рассчитать стоимость в 2 шага</h2>
          <p className={styles.text}>
            Сделаем бар с любимыми профессиональными <br />
            коктейлями на вашем мероприятии.
          </p>
          <div className={styles.imgButtonContainer}>
            <button className={styles.calculateButton}>Рассчитать стоимость</button>
          </div>
        </div>
      </div>
    </div>
  )
}
