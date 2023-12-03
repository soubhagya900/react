import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
 // let counter = 6
 let [counter,setCounter] = useState(15)

  const addValue = () => {
    console.log('added value '+counter);
    if(counter<20)
    setCounter(++counter)
    
  }

  const removeValue = () => {
    console.log('removed value'+counter);
    if(counter>0)
      setCounter(--counter)
   
  }

  return (
    <>
     <h1>Chai and Soubhagya</h1>
     <h2>Counter : {counter}</h2>
     <button onClick={addValue} className='btn'>Increase</button>
     <button onClick={removeValue} className='btn'>Decrease</button>
    </>
  )
}

export default App
