import React, { useState } from 'react'
import styles from '../../styles/Reviews.module.css'

const Reviews = () => {
  const [mstyle, setMstyle] = useState(styles.hid);

  const change_style = () =>{
    setMstyle(mstyle === styles.hid ? styles.show : styles.hid)
  }
  return (
    <section className={styles.review}>
          <div className={styles.title}>
              <h2>ОТЗЫВЫ НАШИХ КЛИЕНТОВ</h2>
          </div>

        <div className={styles.main}>  {/* общий 3 списков*/} 
              <div className={styles.list_t}>
                        <div className={styles.list} onClick={change_style}> {/* div 1 списка */}  
                            <div> 
                            <h2> Первый</h2>  </div>

                                <div className={mstyle}> {/* div 1 раскрывающегося списка */}  
                                    <div className={styles.wrap}>
                                      <div>
                                        <h2>Услуга 1 - 1</h2>
                                      </div>
                                    </div>

                                    <div className={styles.wrap}>
                                      <div>
                                        <h2>Услуга 1 - 2</h2>
                                      </div>
                                    </div>

                                    <div className={styles.wrap}>
                                      <div>
                                        <h2>Услуга 1 - 3</h2>
                                      </div>
                                    </div>
                                    
                                </div>
                            
                          

                        </div>

                    </div>

                <br></br>
                

                <div className={styles.list}> {/* div 2  списка */}  
                            <div> 
                            <h2> Второй</h2> 
                                  <div className={mstyle}> {/* div 1 раскрывающегося списка */}  
                                      <h2>Услуга 2 - 1</h2>
                                      
                                  </div>
                              
                              </div>

                

                </div>
                <br></br>

                              <div className={styles.list} onClick={change_style}> {/* div 3  списка */}  

                                    <div > 
                                    <h2> Третий</h2> 
                                          <div className={mstyle}> {/* div 1 раскрывающегося списка */}  
                                              <h2>Услуга 3 - 1</h2>
                                              
                                          </div>
                                      
                                      </div>

                              </div>
        </div>
    
    </section>
  )
}

export default Reviews