import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen grid place-content-center text-3xl bg-gray-700 text-yellow-300">
      <span className='hover:text-red-500'>
        tailwindcss example
      </span>
    </div>
  )
}

export default App
