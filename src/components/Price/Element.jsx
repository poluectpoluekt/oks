import React from 'react'
import styles from '../../styles/Element.module.css'

function Element(props) {
  return (
    <div className={styles.wrap_list_item}>
                    <div>
                                   <div className={styles.wrap_list_item_content}>
                                                <div>
                                                       <h2> {props.value.name}</h2> 
                                                                                                

                                                              <div className={styles.item_content_btn}>
                                                              {props.value.price}
                                                              </div>

                                                  </div>
                                           </div>
                                 </div>
                                                          
                    </div>
  )
}

export default Element