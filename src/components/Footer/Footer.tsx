import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'
import vkIcon from '../../assets/icons/vk-icon.svg'
import fbIcon from '../../assets/icons/fb-icon.svg'
import instIcon from '../../assets/icons/inst-icon.svg'
import mirIcon from '../../assets/icons/mir-icon.svg'
import visaIcon from '../../assets/icons/visa-icon.svg'
import mcIcon from '../../assets/icons/mc-icon.svg'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top Links */}
        <div className={styles.topLinks}>
          <div className={styles.links}>
            {[
              'Услуги',
              'Фотоотчеты',
              'О нас',
              'Контакты',
              'Партнерам',
              'Мы в СМИ',
              'Вакансии',
              'Статьи',
              'Задать вопрос',
              'Коктейльная карта',
            ].map((link, index) => (
              <Link key={index} to='#' className={styles.link}>
                {link}
              </Link>
            ))}
          </div>
          <div className={styles.footerBottom}>
            <p>© 2010—2024 ООО “Бар Стрит”. Выездные бары.</p>
            <p className={styles.marginBottom}>
              Используя сайт, вы принимаете условия{' '}
              <Link to='#' className={styles.policyLink}>
                Публичной оферты
              </Link>{' '}
              и{' '}
              <Link to='#' className={styles.policyLink}>
                Политики в отношении <br />
                обработки персональных данных
              </Link>
              .
            </p>
            <p>Разработка и продвижение сайта: агентство “Конструктивные решения”</p>
          </div>
        </div>

        {/* Contact and Info */}
        <div className={styles.contactInfoWrapper}>
          {/* Contacts */}
          <div className={styles.contactInfo}>
            <div className={styles.contactBlock}>
              <div className={styles.contactContent}>
                <p className={styles.bold}>Москва</p>
                <p className={styles.contactText}>+7 495 374-61-62</p>
              </div>

              <div className={styles.contactContent}>
                <p className={styles.bold}>Адрес</p>
                <p className={styles.contactText}>г. Москва, ул. Клары Цеткин д. 4</p>
              </div>
            </div>

            <div className={styles.contactBlock}>
              <div className={`${styles.contactContent} ${styles.leftPadding}`}>
                <p className={styles.bold}>Санкт-Петербург</p>
                <p className={styles.contactText}>+7 812 438-12-14</p>
              </div>

              <div className={styles.contactContent}>
                <div className={styles.socialLinks}>
                  <Link to='#' className={styles.socialLink}>
                    <img src={vkIcon} alt='VK' />
                  </Link>
                  <Link to='#' className={styles.socialLink}>
                    <img src={instIcon} alt='Instagram' />
                  </Link>
                  <Link to='#' className={styles.socialLink}>
                    <img src={fbIcon} alt='Facebook' />
                  </Link>
                </div>
              </div>

              <div className={`${styles.contactContent} ${styles.leftPadding}`}>
                <div className={styles.cardIcons}>
                  <Link to='#' className={styles.cardIcon}>
                    <img src={mirIcon} alt='Facebook' />
                  </Link>
                  <Link to='#' className={styles.cardIcon}>
                    <img src={visaIcon} alt='Facebook' />
                  </Link>
                  <Link to='#' className={styles.cardIcon}>
                    <img src={mcIcon} alt='Facebook' />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Callback */}
          <div className={styles.buttonContainer}>
            <button className={styles.callbackButton}>Обратный звонок</button>
          </div>
        </div>

        {/* Footer Bottom */}
        {/* <div className={styles.footerBottom}>
          <p>© 2010—2024 ООО “Бар Стрит”. Выездные бары.</p>
          <p className={styles.marginTop}>
            Используя сайт, вы принимаете условия{' '}
            <Link to='#' className={styles.policyLink}>
              Публичной оферты
            </Link>{' '}
            и{' '}
            <Link to='#' className={styles.policyLink}>
              Политики в отношении обработки персональных данных
            </Link>
            .
          </p>
          <p className={styles.marginTop}>
            Разработка и продвижение сайта: агентство “Конструктивные решения”
          </p>
        </div> */}
      </div>
    </footer>
  )
}
