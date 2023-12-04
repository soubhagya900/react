import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

Card
function App() {
 
  return (
    <>
      <h1 className='bg-green-400 text-blue-500 rounded-xl p-4 mb-4'>Tail Wind Test</h1>
      <Card name='Soubhagya' btnValue='Visit Me'/>
      <Card name='Shantanu' btnValue='Click Me'/>
    </>
  )
}

export default App
