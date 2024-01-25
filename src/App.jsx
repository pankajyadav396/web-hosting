import { useEffect, useState } from 'react'
import './App.css'
import Cloud from './components/Cloud'
import Footer from './components/Footer'
import Lemonwares from './components/Lemonwares'
import Navbar from './components/Navbar'
import Serve from './components/Serve'
import Stories from './components/Stories'
import Tabsmainsec from './components/Tabsmainsec'
import Timemap from './components/Timemap'
import Lastsec from './components/lastsec'
import Preloader from './components/Preloader'
import Backtop from './components/Backtop'

function App() {

  return (
    <>
      <Preloader />
      <Backtop/>
      <Navbar />
      <Tabsmainsec />
      <Cloud />
      <Timemap />
      <Lemonwares />
      <Stories />
      <Serve />
      <Lastsec />
      <Footer />
    </>
  )
}

export default App