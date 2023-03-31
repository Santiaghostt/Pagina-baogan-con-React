import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Personajes from './components/Personajes'
import Section3 from './components/Section3'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <Header />
      <Section1 />
      <Section2 />
      <div className='row d-flex'>
        <div className='col-12 col-lg-4'>
          <Personajes 
          imagenes="baogan"
          titulo="BAOGAN"
          texto="Es el villano principal de esta trama, no es un personaje jugable pero es bastante importante para el desarrolo de la historia, tiene un temperamento hostíl y volatil, es mejor tenerlo de lejos..."
          />
        </div>
        <div className='col-12 col-lg-4'>
          <Personajes 
          imagenes="evita"
          titulo="EVITA"
          texto="Es una gran chica astuta e ingeniosa a la hora de resolver problemas, cuenta con algunas herramientas, es una personaje principal al lado de evito y es un personaje jugable"/>
        </div>
        <div className='col-12 col-lg-4'>
          <Personajes 
          imagenes="evito"
          titulo="EVITO"
          texto="Es de una antigua raza hombre-lobo cuenta con habilidades físicas fascinantes y destaca muy bien en conjunto con evita, es uno de los 2 personajes jugbles para la historia."/>
        </div>
      </div>
      <Section3 />
      <Footer />
    </div>
  )
}

export default App
