import React from 'react'
import { Link } from 'react-router-dom'
import {ROUTES} from '../../utils/routes'
import LOGO from '../../images/logo.jpg'

import styles from '../../styles/Header.module.css'

import tg from '../../images/telegram.svg'
import wa from '../../images/wa.svg'


const Header = () => {
  return (
    <div className={styles.header}>
              <div className={styles.logo}>
                <Link to={ROUTES.HOME} className={styles.link}> 
                  <img src={LOGO} alt='Stuff' />
                </Link>
              </div>

              <div className={styles.left}>
                <ul>
                  <li>
                    <Link to={ROUTES.HOME} className={styles.link}> 
                      <h2>Услуги</h2>
                    </Link>
                  </li>

                  <li>
                    <Link to={ROUTES.HOME} className={styles.link}> 
                      <h2>Цены</h2>
                    </Link>
                  </li>

                  {/* <li>
                    <Link to={ROUTES.HOME} className={styles.link}> 
                      <h2>Отзывы</h2>
                    </Link>
                  </li> */}
                </ul>
              </div>

            <div className={styles.right}>
                <div>
                  <Link to={ROUTES.HOME} className={styles.number}> 
                    <h2>+79235022450</h2>
                  </Link>

                            <div className={styles.socials}>
                                <a href="https://t.me/bityukova_studio" target="_blank" rel="noreferrer">
                                  <img src={tg} width="40px" height="40px" loading="lazy" alt='#'> 
                                  </img>
                                </a>

                                <a href="https://wa.clck.bar/79235022450" target="_blank" rel="noreferrer">
                                  <img src={wa} width="40px" height="40px" loading="lazy" alt='#'></img>
                                </a>
                            </div>

                            <div >
                                <a href="https://b629680.yclients.com/company/595090/select-services?o=m-1" target="_blank" rel="noreferrer">
                                <h2>Записаться</h2>
                                </a>
                            </div>
                </div>
              
             </div>        

    </div>
  )
}

export default Header