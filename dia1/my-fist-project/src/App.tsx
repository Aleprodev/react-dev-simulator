import { useState } from 'react'
import CustomButton from './components/CustomButton'

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
    <div className='p-10'>
      <h1 className='font-bold underline text-red-500 w-fit text-5xl'>Hola mundo</h1>
        {/* Este es un botón con estilos condicionales */}
        <button className={`${count > 10 ? 'bg-red-500' : 'bg-purple-700'} text-white px-4 py-2 font-bold rounded-full mt-5 hover:scale-110 transition-all`} onClick={() => setCount(count + 1)} >
          count is {count}
        </button>

        {/* Esto es una condición if-else */}
        {count > 10
          ? <p>{persona.nombre}</p>
          : personas.map((fulano, index) => <p key={index}>{fulano.nombre}</p>)
        }

        <CustomButton text={`Resta el contador ${count}`} bgColor='blue-800' cb={() => setCount(count - 1)} />
    </div>
  )
}

export default App
