import React from 'react'

import styles from '../../styles/Contact.module.css'
import telegram from '../../images/telegr.svg'
import wa from '../../images/whatsap.svg'
import icon from '../../images/icon.png'

const Contact = () => {
  return (
    <div className={styles.main}>
        <div className={styles.conteiner_flex}> 
        
                  <a href='https://t.me/bityukova_studio' target="_blank" rel="noreferrer"> 
                    <img src={telegram} alt='#'></img>
                    <h2>Telegram</h2>
                  </a>

                  <a href='https://wa.clck.bar/79235022450' target="_blank" rel="noreferrer"> 
                    <img src={wa} alt='#'></img> 
                    <h2>Whatsapp</h2> 
                  </a>

                  <a href='https://b629680.yclients.com/company/595090/select-services?o=m-1' target="_blank" rel="noreferrer"> 
                    <img src={icon} className={styles.icon}></img> 
                    <h2>Online-запись</h2> 
                  </a>

        </div>  
    
    
    </div>
  )
}

export default Contact