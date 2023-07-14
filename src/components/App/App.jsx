import React from 'react'
import AppRoutes from "../Routes/Routes"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Contact from "../Contact/Contact"
import Runline from "../Runline/Runline"


const App = () =>{
    return <div className="app">
        <Runline/>
        <Header /> 
        <AppRoutes />
        <div className='container'>
            <Contact />
        </div>
        <Footer/>
    </div>
}

export default App;