import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WorkerTesting from './component/WorkerTesting'

function App() {
  const [count, setCount] = useState([0])
  console.log(count)

  return (
    <>
      <h1>React Playground</h1>
      <WorkerTesting/>
    </>
  )
}

export default App
