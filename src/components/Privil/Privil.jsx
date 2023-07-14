import React from 'react'

import styles from '../../styles/Privil.module.css'

const Privil = () => {
  return (
    <section className={styles.privil}>
        <div className={styles.top_line}>
              <div className={styles.section_item}>
                  <h2 >ПРЕИМУЩЕСТВА</h2>
              </div>
          </div>


          <div className={styles.section_item}>
                    <div className={styles.container}>

                          <div className={styles.row}>
                                <div className={styles.adventages_item}>
                                    <div className={styles.bg}>
                                          
                                          <h3 className={styles.item_text}>Экспертность</h3>
                                          <div className={styles.item_info}>
                                              <div className={styles.item_info_content}>
                                                <h3>Мы находим индивидуальный подход к каждому пациенту и дорожим своей репутацией.</h3>
                                                <p>У нас работают мастера с большим опытом работы. Они деликатны и внимательны к каждому пациенту. Перед процедурой вы обсудите с специалистом все интересующие моменты.</p>
                                              </div>
                                          </div>
                                      </div>
                                </div>

                                <div className={styles.adventages_item}>
                                      <div className={styles.bg}>
                                        <h3 className={styles.item_text}>Доступные цены</h3>
                                        <div className={styles.item_info}>
                                              <div className={styles.item_info_content}>
                                                <h3>Сделаем расчёт на 3 года на примере комплекса MIDI. А также сравним с бритьем бритвой </h3>
                                                <p>За 3 года депиляции воском/сахаром вы тратите 71760 ₽, лазером 58800 ₽, а бритвой вообще 126000 ₽. Дорого брить себя бритвой, травмировать кожу и лечить воспаления и высыпания из-за этого</p>
                                              </div>
                                          </div>
                                      </div>
                                </div>

                                <div className={styles.adventages_item}>
                                      <div className={styles.bg}>
                                        <h3 className={styles.item_text}>Высококачественное оборудование</h3>
                                        <div className={styles.item_info}>
                                              <div className={styles.item_info_content}>
                                                <h3>Мы работаем на лучшем оборудовании</h3>
                                                <p>Мы работаем на материалах европейского качества, а наш лазер произведён в ГЕРМАНИ.</p>
                                              </div>
                                          </div>
                                      </div>
                                </div>
                            </div>


                            <div className={styles.row}>

                                <div className={styles.adventages_item_bot}>
                                    <div className={styles.bg}>
                                      <h3 className={styles.item_text}>Решение любой проблемы</h3>
                                      <div className={styles.item_info}>
                                              <div className={styles.item_info_content}>
                                                <h3>Поможем в решение проблем</h3>
                                                <p>Наши специалисты помогут справиться с любой проблемой. У нас работают мастера с большим опытом работы. Они деликатны и внимательны к каждому пациенту .</p>
                                              </div>
                                          </div>
                                    </div>
                                    
                                  </div>  

                                  <div className={styles.adventages_item_bot}>  
                                    <div className={styles.bg}>
                                      <h3 className={styles.item_text}>Сертификаты</h3>
                                      <div className={styles.item_info}>
                                              <div className={styles.item_info_content}>
                                                <h3>Всегда в наличии ПОДАРОЧЫЕ СЕРТИФИКАТЫ</h3>
                                                <p>Лучший, полезный, девчачий подарок - сертификат на сахарную депиляцию! Оксана Битюкова - супер-мастер по шугарингу и партнёр нашего проекта</p>
                                              </div>
                                          </div>
                                    </div>
                                    
                                  </div>

                                  <div className={styles.adventages_item_bot}> 
                                    <div className={styles.bg}>
                                      <h3 className={styles.item_text}>Персонал</h3>
                                      <div className={styles.item_info}>
                                              <div className={styles.item_info_content}>
                                                <h3>20 мастеров</h3>
                                                <p>Все мастера имеют соответствующую квалификацию.</p>
                                              </div>
                                          </div>
                                    </div>
                                  


                                  </div>
                            </div>
                    </div>
              </div>
    </section>
  )
}

export default Privil