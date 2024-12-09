import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0)

  const persona = {
    nombre: "Twilla",
    edad: 22
  }

  const personas = [
    { nombre: "Pedro", edad: 20 },
    { nombre: "Fernando", edad: 22 },
    { nombre: "Alejandro", edad: 23 },
  ]

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Algún cambio</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>

        {/* Esta es la impresión de un objeto */}
        <p>{persona.nombre}: {persona.edad}</p>

        {/* Esta es la impresión de un array  */}
        {personas.map((fulano, index) => <p key={index}>Hola, {fulano.nombre}, tienes {fulano.edad}</p>)}

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
