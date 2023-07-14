import React from 'react'
import styles from '../../styles/Club.module.css'

import pClub from '../../images/club.jpg'


const Club = () => {
  return (
    <section>
        <div className={styles.conteiner_title}>
            <h2> Клубная Карта </h2>
        </div>

        <div className={styles.conteiner}>
                <div className={styles.conteiner_flex}>
                    <div className={styles.conteiner_photo}>
                        <img src={pClub} alt='#'></img>
                    </div>

                    <div className={styles.conteiner_descri}> {/*общий справа, с кнопками */}
                            <div className={styles.description}> {/*общий справа, без кнопок */}
                                            <div> {/* справа для текста */}
                                                
                                                    <h2>Бонусы для держателя карты ПОСТОЯННОГО КЛИЕНТА</h2>

                                                <ul>
                                                    <li> право на скидку одной зоны на каждую четвертую процедуру </li>
                                                    <li> Скидки 20%, 50% и даже 100% </li>
                                                    <li> скидку на зону Глубокого бикини</li>
                                                    <li> У каждой карты есть имя - Имя любимого клиента</li>
                                                </ul>

                                            </div>
                                </div> {/*общий справа, без кнопок */}

                            <div className={styles.other}>

                            </div>
                    </div> {/*общий справа, с кнопками */}

                </div>

        </div>

    </section>
  )
}

export default Club