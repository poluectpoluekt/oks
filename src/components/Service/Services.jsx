import React from 'react'

import styles from '../../styles/Services.module.css'

import epil from '../../images/laser-epil.jpg'
import lpg from '../../images/lpg2.jpg'
import sugar from '../../images/wax4.jpg'
import consult from '../../images/cons2.jpg'

const Services = () => {
  return (
    <div className={styles.serv}>
      
        <div className={styles.info}>
            <h2>ЧТО МЫ МОЖЕМ ВАМ ПРЕДЛОЖИТЬ</h2>
                <div>
                  <p>Мы помогаем раскрыть и подчеркнуть вашу природную красоту. </p>
                        
                  <p>Эффект от процедур превзойдет все ваши ожидания.</p>
                </div>
        </div>


          <div className={styles.img}>
                <div className={styles.wrapper}>
                  <img src={epil} alt='#' className={styles.img}></img>
                  <h3>Лазерная эпиляция на диодном лазере</h3>
                  
                </div>
            
            
                <div className={styles.wrapper}>
                  <img src={lpg} alt='#' className={styles.img}></img>
                  <h3>LPG-массаж</h3>
                  
                </div>

                <div className={styles.wrapper}>
                  <img src={sugar} alt='#' className={styles.img}></img>
                  <h3>Депиляция сахаром или воском</h3>
                  
                </div>

                <div className={styles.wrapper}>
                  <img src={consult} alt='#' className={styles.img}></img>
                  <h3>Онлайн-консультация по подбору косметических средств для лица и тела</h3>
                  
                </div>

            
          </div>

    </div>
  )
}

export default Services