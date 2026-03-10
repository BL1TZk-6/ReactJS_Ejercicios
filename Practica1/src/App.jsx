import { useState } from 'react'
import './App.css'
import Acordeon from './components/Acordeon'
import Alertas from './components/Alertas'
import Insignias from './components/Insignias'
import Migaja from './components/MigajaPan'
import Boton from './components/Botones'
import Botones1 from './components/Botones2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Mis 20 components</h1>
    <h3>Chris Morales</h3>
    <hr />
    <Acordeon></Acordeon>
    <br />
    <Alertas></Alertas>
    <br />
    <Insignias></Insignias>
    <br />
    <Migaja></Migaja>
    <br />
    <Boton></Boton>
    <br />
    <br />
    <Botones1></Botones1>

    
    </>
  )
}

export default App
