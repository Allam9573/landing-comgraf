import { useState } from 'react'
import { Formulario } from './components/Formulario'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { ChooseUs } from './components/ChooseUs'
import { Portfolio } from './components/Portfolio'
import { OurClients } from './components/OurClients'
// import './assets/img/intro-img.svg'
// import './assets/css/style.css'
// import './assets/vendor/bootstrap/css/bootstrap.min.css'
// import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
// import './assets/vendor/glightbox/css/glightbox.min.css'
// import './assets/vendor/swiper/swiper-bundle.min.css'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Services />
        <ChooseUs />
        <Portfolio />
        <OurClients/>
        <Formulario />
      </main>
    </>
  )
}

export default App
