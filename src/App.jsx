import { useState } from 'react'
import { Formulario } from './components/Formulario'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import './assets/css/style.css'
import './assets/img/intro-img.svg'
import { About } from './components/About'
function App() {

  return (
    <>
      <Header />
      <Hero />
      <About/>
      <Formulario />
    </>
  )
}

export default App
