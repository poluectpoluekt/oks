import React, { useState } from 'react'
import styles from '../../styles/Price.module.css'

import Element from './Element';

const Price = () => {
  // const [display, setDisplay] = useState({

  //   first: styles.conteiner_list_hidden,
  //   second: styles.conteiner_list_hidden,
  //   third: styles.conteiner_list_hidden
  // });
  const [display, setDisplay] = useState(styles.conteiner_list_hidden)

  const [displayS, setDisplayS] = useState(styles.conteiner_list_hidden)

  const [displayT, setDisplayT] = useState(styles.conteiner_list_hidden)


  const openList = () => {

    
    setDisplay(display === styles.conteiner_list_hidden ? styles.conteiner_list_open_show : styles.conteiner_list_hidden);
    
  }

  const openListSec = () => {
   
    setDisplayS(displayS === styles.conteiner_list_hidden ? styles.conteiner_list_open_show : styles.conteiner_list_hidden);
  }

  const openListTh = () => {
    
    setDisplayT(displayT === styles.conteiner_list_hidden ? styles.conteiner_list_open_show : styles.conteiner_list_hidden);
  }

  return (
    <section id='price' className={styles.price}>
          <div className={styles.title}>
            <h2>СТОИМОСТЬ ЛАЗЕРНОЙ ЭПИЛЯЦИИ В НАШЕМ САЛОНЕ</h2>
          </div>

          <div className={styles.conteiner_list}>
   
                    <div className={styles.conteiner_list_title}> {/* div объединяющий заголовок и раскр. список */}
                            
                                          <div className={styles.conteiner_list_flex } onClick={ openList}> {/* div 1 заголовка от раскрывающегося списка */}
                                                              <div className={styles.conteiner_list_name}>
                                                                  <h2 className={styles.list_name}>ЛАЗЕРНАЯ ЭПИЛЯЦИЯ</h2>
                                                              </div>
                                                          
                                                              <svg  className={styles.list_btn} > </svg>
                                                    </div>

                                              <div className={display}>   {/* div раскрывающегося списка */}

                                                  <Element value={ {name: 'ЛЭ Комплекс MAXI', price: '6 400 RUB'}}/>
                                                  <Element value={ {name: 'ЛЭ Комплекс MIDI', price: '4 900 RUB'}}/>
                                                  <Element value={ {name: 'ЛЭ Комплекс MINI', price: '3 200 RUB'}}/>
                                                  <Element value={ {name: 'ЛЭ Ноги полностью', price: '4 300 RUB'}}/>
                                                  <Element value={ {name: 'ЛЭ Классическое бикини', price: '1 500 RUB'}}/>
                                                    
                                                                                                                   

                                              </div> {/* div раскрывающегося списка */}                                         
                               </div> {/* div list_title  */}

                      <div className={styles.conteiner_list_title}> {/* div 2 заголовка от раскрывающегося списка */}
                                        <div className={styles.conteiner_list_flex}  onClick={ openListSec}>
                                                              <div className={styles.conteiner_list_name}>
                                                                  <h2 className={styles.list_name}>LPG массаж</h2>
                                                              </div>

                                                              <svg  className={styles.list_btn} > </svg>
                                  
                                        </div>

                                        <div className={displayS}>

                                        <Element value={ {name: 'LPG Разовое посещение', price: '1 000 RUB'}}/>
                                        <Element value={ {name: 'LPG Первое посещение + костюм', price: '1 500 RUB'}}/>
                                        <Element value={ {name: 'Абонемент', price: '1 000 RUB'}}/>
                                                                  
                                        </div>

                         </div> {/* div 2 list_title  */}


                              <div className={styles.conteiner_list_title}>  {/* div 3 заголовка от раскрывающегося списка */}
                                      <div className={styles.conteiner_list_flex} onClick={ openListTh}>

                                                  <div className={styles.conteiner_list_name}>
                                                    <h2 className={styles.list_name}>Депиляция Елена</h2>
                                                    </div>

                                                    <svg  className={styles.list_btn} > </svg>                                                    
                                            </div>

                                            <div className={displayT}>

                                                <Element value={ {name: 'Комплекс MAXI (глубокое бикини + подмышки + ноги полностью)', price: '2 900 RUB'}}/>
                                                <Element value={ {name: 'Комплекс MIDI (Глубокое бикини +подмышки +голени)', price: '2 300 RUB'}}/>
                                                <Element value={ {name: 'Комплекс MINI (глубокие бикини и подмышки)', price: '1 500 RUB'}}/>
                                                <Element value={ {name: 'Голени/бедра', price: '800 RUB'}}/>
                                                <Element value={ {name: 'Ноги полностью', price: '1 400 RUB'}}/>
                                            </div>

                                  </div>   {/* div 3 list_title  */}
                </div>

          {/* <div className={styles.conteiner_btn}>
            <button> 
            </button>
          </div> */}
    </section>
  )
}

export default Price