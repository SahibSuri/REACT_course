import { useState } from 'react'
import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Button from './components/Button'
import Component1 from './components/Component1'
import { counterContext } from './context/context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <counterContext.Provider value={count} >
      <div>
        <Navbar count={count} />
      </div>
      <section id="center">
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <div className="ticks"></div>
      <section id="spacer"></section>
      </counterContext.Provider>
    </>
  )
}

export default App
