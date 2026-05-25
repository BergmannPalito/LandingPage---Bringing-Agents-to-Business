import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Approach from './components/Approach'
import Partners from './components/Partners'
import Team from './components/Team'
import Formats from './components/Formats'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {
  const [authenticated, setAuthenticated] = useState(
    () => localStorage.getItem('authenticated') === 'true'
  )

  if (!authenticated) {
    return <Login onLogin={() => setAuthenticated(true)} />
  }

  return (
    <>
      <Hero />
      <Problem />
      <Approach />
      <Partners />
      <Team />
      <Formats />
      <CallToAction />
      <Footer />
    </>
  )
}

export default App
