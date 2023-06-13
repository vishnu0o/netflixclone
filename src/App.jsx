import React from 'react'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import {orginals,action,comedymovies,horrormovies,romanticmovies,documentaries,actionmovies} from './urls'
import Banner from './components/Banner/Banner'
import Row from './components/Rowpost/Row'
function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Row url={orginals} title='Netflix Orginals'/>
      <Row url={action} title='Action' isSmall/>
      <Row url={comedymovies} title='Comedy Movies' isSmall/>
      <Row url={horrormovies} title='Horror Movies' isSmall/>
      <Row url={documentaries} title='Documentaries Movies' isSmall/>
      <Row url={actionmovies} title='Action Movies' isSmall/>
      <Row url={romanticmovies} title='Romantic Movies' isSmall/>
    </div>
  )
}

export default App
