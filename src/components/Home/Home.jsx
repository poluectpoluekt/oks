import React from 'react'

import Promo from "../Promo/Promo"
import Privil from "../Privil/Privil"
import Services from '../Service/Services'
import Price from "../Price/Price"
//import Reviews from "../Reviews/Reviews"
import Club from '../Club/Club'
//import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <> 
      <Promo/>
      <Services/>
      <Privil/>
      <Price/>
      {/* <Club/> */}
      {/* <Contact/> */}
    </>
  )
}

export default Home