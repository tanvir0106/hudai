import { useState } from 'react'

import './App.css'
import Countries from './components/countries/countries'
Countries
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h6 className="read-the-docs">
          react iye lara chara
        </h6>
        <Countries></Countries>
      </div>

    </>
  )
}

export default App
