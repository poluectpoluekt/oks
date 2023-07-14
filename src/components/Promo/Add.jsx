import React, { useState } from 'react'

import styles from '../../styles/Add.module.css'

import left from '../../images/left.png'
import right from '../../images/right.png'

const Add = (props) => {


  const components = [  { name:  'Лазерная эпиляция на диодном лазере', price: 'от 490 ₽', st: styles.carousel_item},
  { name: 'Лазерная эпиляция всё тело', price: '2 900 ₽', st: styles.carousel_item_sec}, 
  { name: 'Депиляция сахаром или воском от ТОП-мастера', price: 'от 300 ₽', st: styles.carousel_item_thi}, 
  { name: 'Онлайн-консультация по подбору косметических средств для лица и тела', price: 'бесплатно', st: styles.carousel_item_thu}]

const [picture, setPicture] = useState( components[0]);
// const [zagolovok, setZagolovok] = useState( components[0]);
// const [price, setPrice] = useState( components[0]);

const [position, setPosition ] = useState(1);

const nextP = () =>{ 

setPosition(position + 1)
//console.log(position)
  if(position === components.length - 1 ) {
  setPosition(0);
  }

setPicture(components[position]);   
// setZagolovok(components[position]);
// setPrice(components[position]);    
}

const prevP = () =>{

setPosition(position - 1)
if(position === 0 ) {setPosition(components.length - 1)}
setPicture(components[position]);
}



  return (
    <div className={picture.st}>   {/*className={styles.conteiner}                   className={props.value.st} */}
        <div className={styles.conteiner_info}> 
            <h2 className={styles.main}> {picture.name} </h2>   {/* {props.value.name}*/}
            <h2 className={styles.main_p}> {picture.price} </h2> {/* {props.value.price} */}
            <a href='https://b629680.yclients.com/company/595090/select-services?o=m-1' target="_blank" className={styles.btn} rel="noreferrer">Записаться</a>

                    <a className={styles.slide_btn_l} type="button" onClick={prevP} rel="noreferrer"> 
                      <img src={right} onClick={prevP} type="button" alt=''></img>
                    </a>
                    <a className={styles.slide_btn_r} type="button" onClick={nextP} rel="noreferrer">
                      <img src={left} onClick={nextP} type="button" alt=''></img>  
                    </a>
        </div>


    </div>
  )
}

export default Add