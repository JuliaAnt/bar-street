import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import logo from '../../assets/images/logo.svg'
import flag from '../../assets/images/usa-flag.svg'
import lightTheme from '../../assets/images/light-theme.svg'
import darkTheme from '../../assets/images/dark-theme.svg'
import searchIcon from '../../assets/images/search.svg'
import servicesIcon from '../../assets/images/services-icon.svg'
import arrow from '../../assets/images/arrow.svg'
import { useState } from 'react'

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev)
    document.body.classList.toggle(styles.darkMode, !isDarkMode)
  }

  return (
    <header className={styles.header}>
      <div className={styles.topContainer}>
        <div className={styles.themeLangSide}>
          <div className={styles.themeSwitcher}>
            <button
              className={`${styles.themeButton} ${!isDarkMode ? styles.active : ''}`}
              onClick={() => !isDarkMode && toggleTheme()}
            >
              <img src={lightTheme} alt='Light theme icon' />
            </button>
            <button
              className={`${styles.themeButton} ${isDarkMode ? styles.active : ''}`}
              onClick={() => isDarkMode && toggleTheme()}
            >
              <img src={darkTheme} alt='Dark theme icon' />
            </button>
          </div>
          <button className={styles.languageSwitcher}>
            <img src={flag} alt='Language Flag' />
            <span>In English</span>
          </button>
        </div>

        <div className={styles.searchPhoneSide}>
          <div className={styles.search}>
            <input type='text' placeholder='Поиск' />
            <button className={styles.searchButton}>
              <img src={searchIcon} alt='Search icon' />
            </button>
          </div>
          <div className={styles.phone}>8 (499) 520 93 71</div>
        </div>
      </div>

      <div className={styles.bottomContainer}>
        <div className={styles.logo}>
          <img src={logo} alt='Bar-Street Logo' />
          <div className={styles.logoText}>
            <span>BAR-STREET</span>
            <small>Выездной бар и фуршет фуд</small>
          </div>
        </div>
        <nav className={styles.nav}>
          <Link to='#'>
            <img src={servicesIcon} alt='Services Icon' />
            Услуги
            <img src={arrow} alt='Arrow Icon' />
          </Link>
          <Link to='#'>Фотоотчеты</Link>
          <Link to='#'>О нас</Link>
          <Link to='#'>Контакты</Link>
        </nav>
        <button className={styles.callbackButton}>Обратный звонок</button>
      </div>
    </header>
  )
}
