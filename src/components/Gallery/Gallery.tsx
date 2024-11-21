import styles from './Gallery.module.scss'
import sharedStyles from '../../styles/shared.module.scss'
import { images } from './galleryImages'

export const Gallery = () => {
  return (
    <div className={styles.galleryWrapper}>
      <h2 className={sharedStyles.title}>Галерея</h2>
      <div className={styles.galleryGrid}>
        <div className={styles.img1}>
          <img src={images.galleryImg1} alt='Фото' />
        </div>
        <div className={styles.img2}>
          <img src={images.galleryImg2} alt='Фото' />
        </div>
        <div className={styles.img3}>
          <img src={images.galleryImg3} alt='Фото' />
        </div>
        <div className={styles.img4}>
          <img src={images.galleryImg4} alt='Фото' />
        </div>
        <div className={styles.img5}>
          <img src={images.galleryImg5} alt='Фото' />
        </div>
        <div className={styles.img6}>
          <img src={images.galleryImg6} alt='Фото' />
        </div>
      </div>
    </div>
  )
}
