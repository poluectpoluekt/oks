import React from 'react'
import { Link } from 'react-router-dom'
import {ROUTES} from '../../utils/routes'

import styles from '../../styles/Footer.module.css'

import logo from '../../images/logo1.png'
import tg2 from '../../images/tg2.png'
import vk from '../../images/vk.png'

const Footer = () => {
  return (
    <section className={styles.footer}>

    <div className={styles.conteiner_top}>  {/*начало верхнего контейнера */}

          <div className={styles.conteiner_content}>

                    <div>
                      <img src={logo} alt='' className={styles.logo}></img>
                    </div>    

                    
                      <p className={styles.info}>
                       Данный интернет-сайт носит исключительно информационный характер и ни при каких условиях не является публичной офертой. Для получения подробной информации об услугах, ценах и спецпредложениях, пожалуйста, Студию эпиляции EpilWAY.  {/* , определяемой положениями Статьи 437 (2) Гражданского кодекса Российской Федерации */}
                      </p>

              

                    <div className={styles.conteiner_contacts}> {/*контакты */}
                            <a href='tel:+79235022450'  className={styles.phone} rel="noreferrer"> +79235022450</a>

                              <div className={styles.conteiner_socials}>
                                <a href='https://t.me/bityukova_studio' rel="noreferrer">
                                  <img src={tg2} alt='#' width="40px" height="40px"></img>
                                </a>

                                <a href='https://vk.com/epilwaylk' rel="noreferrer">
                                  <img src={vk} alt='#'></img>
                                </a>

                                <ul>
                                  <Link to={ROUTES.HOME} className={styles.link}> 
                                      <h2>Пользовательское соглашение</h2>
                                    </Link>

                                    <Link to={ROUTES.HOME} className={styles.link}> 
                                      <h2>Политика конфиденциальности</h2>
                                    </Link>
                                  </ul>
                              </div>
                    </div>
              </div>

      </div> {/*конец верхнего контейнера */}

      <div className={styles.conteiner_bottom}> {/*начало нижнего контейнера */}
                {/* <div>
                   <ul>
                   <Link to={ROUTES.HOME} className={styles.link}> 
                      <h2>Пользовательское соглашение</h2>
                    </Link>

                    <Link to={ROUTES.HOME} className={styles.link}> 
                      <h2>Политика конфиденциальности</h2>
                    </Link>
                   </ul>
                </div> */}

                <p className={styles.cw}> &copy; EpilWAY 2023 </p>
              

      </div> {/*конец нижнего контейнера */}
    </section>
  )
}

export default Footer