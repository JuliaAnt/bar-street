import React from 'react'
import styles from './CocktailList.module.scss'
import sharedStyles from '../../styles/shared.module.scss'
import whiteChill from '../../assets/images/white-chill.svg'
import antifreeze from '../../assets/images/antifreeze.svg'
import cart from '../../assets/icons/cart.svg'
import plus from '../../assets/icons/plus.svg'
import minus from '../../assets/icons/minus.svg'

export const CocktailList: React.FC = () => {
  const cocktails = [
    { id: 1, name: 'Белый холодок', price: '350 руб', details: {}, icon: whiteChill },
    { id: 2, name: 'Антифриз -30', price: '450 руб', details: {}, icon: antifreeze },
    {
      id: 3,
      name: 'Белый холодок',
      price: '350 руб',
      details: {
        alcohol: 'Крепость: 21%',
        volume: '200 мл',
        ingredients:
          'Водка, сахарный сироп, биттер лемон, апельсиновый ликер, лайм, дробленый лед.',
      },
      icon: whiteChill,
    },
    { id: 4, name: 'Антифриз -30', price: '450 руб', details: {}, icon: antifreeze },
    { id: 5, name: 'Белый холодок', price: '350 руб', details: {}, icon: whiteChill },
    { id: 6, name: 'Белый холодок', price: '350 руб', details: {}, icon: whiteChill },
    { id: 7, name: 'Антифриз -30', price: '450 руб', details: {}, icon: antifreeze },
    {
      id: 8,
      name: 'Белый холодок',
      price: '350 руб',
      details: {
        alcohol: 'Крепость: 21%',
        volume: '200 мл',
        ingredients:
          'Водка, сахарный сироп, биттер лемон, апельсиновый ликер, лайм, дробленый лед.',
      },
      icon: whiteChill,
    },
    { id: 9, name: 'Антифриз -30', price: '450 руб', details: {}, icon: antifreeze },
    { id: 10, name: 'Белый холодок', price: '350 руб', details: {}, icon: whiteChill },
  ]

  return (
    <div className={styles.cocktailList}>
      <h2 className={sharedStyles.title}>Коктейльная карта</h2>
      <div className={styles.grid}>
        {cocktails.map((cocktail) => (
          <div key={cocktail.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src={cocktail.icon}
                alt={`Изображение коктейля ${cocktail.name}`}
                className={styles.image}
              />
              {/* <Link to='#' className={styles.link}>
                <i className='fas fa-external-link-alt'></i>
              </Link> */}
            </div>
            {!cocktail.details.alcohol && (
              <>
                <div className={styles.info}>
                  <p className={styles.price}>{cocktail.price}</p>
                  <p className={styles.name}>{cocktail.name}</p>
                </div>
                <div className={styles.controls}>
                  <div className={styles.quantity}>
                    <button className={styles.button}>
                      <img src={minus} alt='Минус' />
                    </button>
                    <span className={styles.quantityValue}>100</span>
                    <button className={styles.button}>
                      <img src={plus} alt='Плюс' />
                    </button>
                  </div>
                  <button className={styles.cartButton}>
                    <img src={cart} alt='Корзина' />
                  </button>
                </div>
              </>
            )}
            {cocktail.details.alcohol && (
              <div className={styles.details}>
                <p className={styles.alcohol}>{cocktail.details.alcohol}</p>
                <p className={styles.volume}>{cocktail.details.volume}</p>
                <p className={styles.ingredients}>{cocktail.details.ingredients}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.showMore}>
        <button className={styles.showMoreButton}>Показать еще</button>
      </div>
    </div>
  )
}
