import { useState } from 'react'
import './App.css'
import Sidebar from './sections/Sidebar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Resume from './sections/Resume'
import Portfolio from './sections/Portfolio'
import Contact from './sections/Contact'
import ScrollTop from './ScrollTop'
import Preloader from './Preloader'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";


function App() {

  return (
    <div className='app-container index-page'>
      
      <Preloader/>
      
      <Sidebar/>
      
      <main className="main">
        <Hero/>
        <About/>
        <Skills/>
        <Resume/>
        <Portfolio/>
        <Contact/>
      </main>

      <ScrollTop/>
      
      
    </div>
  )
}

export default App
